'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/lib/nav';
import NavGroup from './NavGroup';
import NavLink from './NavLink';

interface Props {
  items: NavItem[];
  variant: 'rail' | 'drawer';
}

type OpenState = Record<string, boolean>;
const STORAGE_KEY = 'sidenav:state';

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

function normalize(path: string) {
  return path.replace(/\/+$/, '') || '/';
}

function isActive(item: NavItem, path: string): boolean {
  const itemPath = item.href ? normalize(item.href) : '';
  if (itemPath && itemPath === path) return true;
  return (item.children || []).some((child) => isActive(child, path));
}

export default function SideNav({ items, variant }: Props) {
  const pathname = usePathname() || '/';
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const current = normalize(pathname.replace(base, ''));

  const [open, setOpen] = useState<OpenState>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setOpen(JSON.parse(stored));
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(open));
  }, [open]);

  const toggle = (id: string) => setOpen((s) => ({ ...s, [id]: !s[id] }));

  const renderItems = (items: NavItem[]) => (
    <ul>
      {items.map((item) => {
        const id = slugify(item.title);
        const active = isActive(item, current);
        const opened = open[id] ?? active;
        if (item.children) {
          return (
            <li key={id}>
              <NavGroup
                item={item}
                id={id}
                isOpen={opened}
                onToggle={() => toggle(id)}
                active={active}
              >
                {renderItems(item.children)}
              </NavGroup>
            </li>
          );
        }
        return (
          <li key={id}>
            <NavLink item={item} isActive={active} />
          </li>
        );
      })}
    </ul>
  );

  const cls =
    variant === 'rail'
      ? 'hidden lg:flex lg:flex-col lg:h-screen lg:sticky lg:top-0 lg:w-[var(--rail-w)] lg:overflow-y-auto border-r border-blood'
      : '';

  return (
    <nav aria-label="Primary" className={cls}>
      {renderItems(items)}
    </nav>
  );
}

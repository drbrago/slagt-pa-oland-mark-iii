'use client';

import { useEffect, useState, useCallback, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';
import NavGroup from './NavGroup';
import { NavItem } from '@/lib/nav';

interface Props {
  items: NavItem[];
  variant: 'rail' | 'drawer';
  className?: string;
}

const STORAGE_KEY = 'sidenav:state';

export default function SideNav({ items, variant, className }: Props) {
  const pathname = usePathname();
  const [openState, setOpenState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      setOpenState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(openState));
  }, [openState]);

  const isItemActive = useCallback(
    (item: NavItem): boolean => {
      if (item.href && (pathname === item.href || pathname.startsWith(item.href + '/')))
        return true;
      return item.children ? item.children.some(isItemActive) : false;
    },
    [pathname]
  );

  function renderItems(nodes: NavItem[]): ReactNode {
    return (
      <ul className="space-y-1">
        {nodes.map((item) => {
          const id = item.title.toLowerCase().replace(/\s+/g, '-');
          const active = isItemActive(item);
          const expanded = item.children ? openState[id] || active : false;

          if (item.children) {
            return (
              <li key={id}>
                <NavGroup
                  id={id}
                  title={item.title}
                  expanded={expanded}
                  onToggle={() =>
                    setOpenState((s) => ({ ...s, [id]: !expanded }))
                  }
                  active={active}
                >
                  {renderItems(item.children)}
                </NavGroup>
              </li>
            );
          }

          return (
            <li key={id}>
              <NavLink href={item.href!} active={active} external={item.external}>
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }

  const widthClass = variant === 'rail' ? 'w-[var(--rail-w)]' : 'w-full';

  return (
    <nav
      aria-label="Primary"
      className={`${widthClass} ${
        variant === 'rail' ? 'h-screen overflow-y-auto sticky top-0' : ''
      } ${className ?? ''}`}
    >
      {renderItems(items)}
    </nav>
  );
}

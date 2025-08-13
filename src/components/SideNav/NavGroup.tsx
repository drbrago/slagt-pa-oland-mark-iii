'use client';

import { ReactNode, useRef, useEffect } from 'react';
import { NavItem } from '@/lib/nav';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Props {
  item: NavItem;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
  active: boolean;
  children: ReactNode;
}

export default function NavGroup({ item, id, isOpen, onToggle, active, children }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!panelRef.current) return;
    if (isOpen) {
      const h = panelRef.current.scrollHeight;
      panelRef.current.style.maxHeight = h + 'px';
    } else {
      panelRef.current.style.maxHeight = '0px';
    }
  }, [isOpen]);

  return (
    <div>
      <button
        className={`flex w-full items-center justify-between px-4 py-2 text-left hover:bg-blood/20 focus:bg-blood/20 rounded ${
          active ? 'font-bold border-l-4 border-blood -ml-px' : ''
        }`}
        aria-controls={id}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {item.title}
        <span className="ml-2">{isOpen ? '−' : '+'}</span>
      </button>
      <div
        id={id}
        ref={panelRef}
        className="overflow-hidden transition-[max-height]"
        style={{ transition: reduced ? 'none' : 'var(--nav-transition)' }}
      >
        {children}
      </div>
    </div>
  );
}

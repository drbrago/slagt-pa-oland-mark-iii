'use client';

import { ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface Props {
  id: string;
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: ReactNode;
  active?: boolean;
}

export default function NavGroup({
  id,
  title,
  expanded,
  onToggle,
  children,
  active,
}: Props) {
  const reduced = useReducedMotion();
  const buttonClasses = `flex w-full items-center justify-between px-4 py-2 border-l-2 ${
    active
      ? 'font-bold border-blood'
      : 'border-transparent hover:border-albescent-white-400'
  }`;
  return (
    <div>
      <button
        aria-controls={id}
        aria-expanded={expanded}
        onClick={onToggle}
        className={buttonClasses}
      >
        <span>{title}</span>
        <span aria-hidden="true" className="ml-2">
          {expanded ? '−' : '+'}
        </span>
      </button>
      <div
        id={id}
        className="overflow-hidden"
        style={{
          maxHeight: expanded ? '1000px' : '0',
          transition: reduced ? 'none' : 'max-height var(--nav-transition) ease',
        }}
      >
        {children}
      </div>
    </div>
  );
}

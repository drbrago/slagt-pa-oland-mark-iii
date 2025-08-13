'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
  active?: boolean;
  external?: boolean;
}

export default function NavLink({ href, children, active, external }: Props) {
  const base = 'flex items-center gap-2 px-4 py-2 border-l-2';
  const state = active
    ? 'font-bold border-blood text-albescent-white-100'
    : 'border-transparent text-albescent-white-300 hover:border-albescent-white-400 hover:text-albescent-white-100';

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${state}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} ${state}`}
      aria-current={active ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import OverlayDrawer from '@/components/OverlayDrawer';
import SideNav from '@/components/SideNav/SideNav';
import { navItems } from '@/lib/nav';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <>
      <OverlayDrawer
        isOpen={open}
        onClose={() => setOpen(false)}
        label="Primary navigation"
      >
        <SideNav items={navItems} variant="drawer" />
      </OverlayDrawer>
      <div className="min-h-screen lg:grid lg:grid-cols-[var(--rail-w)_1fr]">
        <SideNav items={navItems} variant="rail" />
        <div className="flex min-h-screen flex-col">
          <header className="flex items-center justify-between p-4 lg:hidden border-b border-blood">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="p-2"
            >
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
              >
                <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </header>
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

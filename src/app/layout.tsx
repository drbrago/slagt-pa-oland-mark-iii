import type { Metadata } from "next";
import { Bebas_Neue, Roboto_Slab } from "next/font/google";
import "./globals.css";
import React from "react";
import { usePathname } from "next/navigation";
import { navItems, NavItem } from "@/lib/nav";
import SideNav from "@/components/SideNav/SideNav";
import OverlayDrawer from "@/components/OverlayDrawer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-logo",
  weight: "400",
});
const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-hero",
});

export const metadata: Metadata = {
  title: "Slakt på Öland Mark III",
  description:
    "Ett surrealistiskt postapokalyptiskt zombie-skräck-rollspel i Sverige, byggt på Year Zero Engine (Fria Ligan open source).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${bebasNeue.variable} ${robotoSlab.variable}`}>
      <body className="bg-ink text-albescent-white-100">
        <a
          href="#main-content"
          className="sr-only z-50 focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-albescent-white-100 focus:text-blood focus:p-2 focus:rounded"
        >
          Hoppa till huvudinnehållet
        </a>
        <ClientShell items={navItems}>{children}</ClientShell>
      </body>
    </html>
  );
}

function ClientShell({
  items,
  children,
}: {
  items: NavItem[];
  children: React.ReactNode;
}) {
  "use client";
  const [open, setOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  React.useEffect(() => setOpen(false), [pathname]);
  return (
    <>
      <div className="lg:grid lg:grid-cols-[var(--rail-w)_1fr] min-h-screen">
        <SideNav items={items} variant="rail" className="hidden lg:block bg-blood text-albescent-white-100" />
        <div className="flex flex-col min-h-screen">
          <header className="lg:hidden bg-blood p-4">
            <button
              ref={triggerRef}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="p-2 text-albescent-white-100 focus:outline-none focus:ring-2 focus:ring-albescent-white-100"
            >
              ☰
            </button>
          </header>
          {children}
        </div>
      </div>
      <OverlayDrawer
        isOpen={open}
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
        label="Primary navigation"
      >
        <SideNav items={items} variant="drawer" />
      </OverlayDrawer>
    </>
  );
}

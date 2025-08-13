export type NavItem = {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  children?: NavItem[];
  external?: boolean;
};

export const navItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Docs',
    children: [
      { title: 'Getting Started', href: '/docs/getting-started' },
      {
        title: 'Guides',
        children: [
          { title: 'Installation', href: '/docs/guides/installation' },
        ],
      },
    ],
  },
  {
    title: 'GitHub',
    href: 'https://github.com/example/repo',
    external: true,
  },
];

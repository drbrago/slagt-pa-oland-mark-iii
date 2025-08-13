import { ReactNode, createElement } from 'react';

export type NavItem = {
  title: string;
  href?: string;
  icon?: ReactNode;
  children?: NavItem[];
  external?: boolean;
};

const HomeIcon = createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    className: 'h-4 w-4 mr-2',
    'aria-hidden': 'true',
    fill: 'currentColor',
  },
  createElement('path', {
    d: 'M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5Z',
  })
);

export const navItems: NavItem[] = [
  { title: 'Start', href: '/start', icon: HomeIcon },
  {
    title: 'Resources',
    children: [
      { title: 'Setting', href: '/setting' },
      { title: 'Characters', href: '/characters' },
    ],
  },
  {
    title: 'GitHub',
    href: 'https://github.com/drbrago/slakt-pa-oland-mark-iii',
    external: true,
  },
];

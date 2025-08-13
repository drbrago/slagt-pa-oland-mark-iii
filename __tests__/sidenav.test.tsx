import { render, screen, fireEvent } from '@testing-library/react';
import SideNav from '@/components/SideNav/SideNav';
import type { NavItem } from '@/lib/nav';

jest.mock('next/navigation', () => ({
  usePathname: () => '/start',
}));

const items: NavItem[] = [
  { title: 'Start', href: '/start' },
  {
    title: 'Docs',
    children: [{ title: 'Intro', href: '/docs/intro' }],
  },
];

describe('SideNav', () => {
  it('marks active link', () => {
    render(<SideNav items={items} variant="rail" />);
    expect(
      screen.getByRole('link', { name: 'Start' })
    ).toHaveAttribute('aria-current', 'page');
  });

  it('toggles group', () => {
    render(<SideNav items={items} variant="rail" />);
    const button = screen.getByRole('button', { name: 'Docs' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });
});

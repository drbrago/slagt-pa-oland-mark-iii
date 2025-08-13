import { render, screen, fireEvent } from '@testing-library/react';
import SideNav from '@/components/SideNav/SideNav';
import { navItems } from '@/lib/nav';
import { vi } from 'vitest';

vi.mock('next/navigation', () => ({
  usePathname: () => '/docs/getting-started',
}));

test('active link has aria-current', () => {
  render(<SideNav items={navItems} variant="rail" />);
  const link = screen.getByRole('link', { name: /getting started/i });
  expect(link).toHaveAttribute('aria-current', 'page');
});

test('toggle group changes aria-expanded', () => {
  render(<SideNav items={navItems} variant="rail" />);
  const btn = screen.getByRole('button', { name: /docs/i });
  expect(btn).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(btn);
  expect(btn).toHaveAttribute('aria-expanded', 'false');
});

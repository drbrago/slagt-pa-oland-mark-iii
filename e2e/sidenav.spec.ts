import { test, expect } from '@playwright/test';

test.describe('sidenav drawer', () => {
  test('opens and navigates via drawer', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.getByRole('link', { name: 'Setting' }).click();
    await page.waitForURL('**/setting');
    await expect(page.getByRole('dialog')).not.toBeVisible();
    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(page.getByRole('link', { name: 'Setting' })).toHaveAttribute(
      'aria-current',
      'page'
    );
  });
});

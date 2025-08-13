import { test, expect } from '@playwright/test';

test.describe('side navigation', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('drawer opens and closes on navigation', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Open menu').click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.getByRole('link', { name: 'Getting Started' }).click();
    await expect(page.getByRole('dialog')).toBeHidden();
    await expect(page.getByRole('link', { name: 'Getting Started' })).toHaveAttribute('aria-current', 'page');
  });
});

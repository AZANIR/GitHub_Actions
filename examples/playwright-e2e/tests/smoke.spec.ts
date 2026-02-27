/**
 * Smoke E2E тест для демонстрації запуску Playwright у GitHub Actions.
 * Перевіряє головну сторінку example.com: заголовок та текст.
 */

import { test, expect } from '@playwright/test';

test.describe('Smoke: example.com', () => {
  test('відкриває головну сторінку та перевіряє заголовок', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { name: 'Example Domain' });
    await expect(heading).toBeVisible();
  });

  test('перевіряє наявність параграфа з текстом про домен', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('p').first()).toBeVisible();
    await expect(page.locator('p').first()).toContainText('domain');
  });
});

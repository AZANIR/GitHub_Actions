/**
 * Базовий E2E тест: перевірка title та структури сторінки example.com.
 * Використовується для прогону в CI та перегляду HTML-звіту.
 */

import { test, expect } from '@playwright/test';

test.describe('Basic: Example Domain', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('має коректний title сторінки', async ({ page }) => {
    await expect(page).toHaveTitle(/Example Domain/);
  });

  test('містить параграф з текстом', async ({ page }) => {
    const paragraphs = page.locator('p');
    await expect(paragraphs.first()).toBeVisible();
  });
});

import { test, expect } from '@playwright/test';

test('Verify successful login', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');

  await expect(page.locator('.post-title')).toHaveText('Logged In Successfully');
});
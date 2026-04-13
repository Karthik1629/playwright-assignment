import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login functionality', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await login.username.fill('student');
  await login.password.fill('Password123');
  await login.submitBtn.click();

  await expect(login.successText).toHaveText('Logged In Successfully');
  await expect(login.logoutBtn).toBeVisible();
});
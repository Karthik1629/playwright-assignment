import { test, expect } from '@playwright/test';
import { SauceDemoPage } from '../pages/SauceDemoPage';

test('Complete checkout flow', async ({ page }) => {
  const sauce = new SauceDemoPage(page);

  await page.goto('https://www.saucedemo.com/');

  // Login
  await sauce.username.fill('standard_user');
  await sauce.password.fill('secret_sauce');
  await sauce.loginBtn.click();

  // Add products
  await sauce.addToCartBtns.nth(0).click();
  await sauce.addToCartBtns.nth(1).click();

  await expect(sauce.cartBadge).toHaveText('2');

  // Remove one item
  await sauce.removeBtn.first().click();
  await expect(sauce.cartBadge).toHaveText('1');

  // Checkout
  await sauce.cartIcon.click();
  await sauce.checkoutBtn.click();

  await sauce.firstName.fill('Test');
  await sauce.lastName.fill('User');
  await sauce.postalCode.fill('110001');
  await sauce.continueBtn.click();

  await sauce.finishBtn.click();

  await expect(sauce.successMsg).toHaveText('Thank you for your order!');
});
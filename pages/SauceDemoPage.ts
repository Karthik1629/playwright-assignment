import { Page, Locator } from '@playwright/test';

export class SauceDemoPage {
  page: Page;

  username: Locator;
  password: Locator;
  loginBtn: Locator;

  addToCartBtns: Locator;
  cartBadge: Locator;
  removeBtn: Locator;

  cartIcon: Locator;
  checkoutBtn: Locator;

  firstName: Locator;
  lastName: Locator;
  postalCode: Locator;
  continueBtn: Locator;
  finishBtn: Locator;

  successMsg: Locator;

  constructor(page: Page) {
    this.page = page;
//asd
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login-button');

    this.addToCartBtns = page.locator('.inventory_item button');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.removeBtn = page.locator('.inventory_item button:has-text("Remove")');

    this.cartIcon = page.locator('.shopping_cart_link');
    this.checkoutBtn = page.locator('#checkout');

    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
    this.finishBtn = page.locator('#finish');

    this.successMsg = page.locator('.complete-header');
  }
}
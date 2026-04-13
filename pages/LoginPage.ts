import { Page, Locator } from '@playwright/test';

export class LoginPage {
  page: Page;

  username: Locator;
  password: Locator;
  submitBtn: Locator;
  successText: Locator;
  logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.submitBtn = page.locator('#submit');
    this.successText = page.locator('.post-title');
    this.logoutBtn = page.getByText('Log out');
  }
}
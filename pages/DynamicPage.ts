import { Page, Locator } from '@playwright/test';

export class DynamicPage {
  page: Page;

  startBtn: Locator;
  helloText: Locator;

  constructor(page: Page) {
    this.page = page;

    this.startBtn = page.locator('#start button');
    this.helloText = page.locator('#finish h4');
  }
}
import { test, expect } from '@playwright/test';
import { DynamicPage } from '../pages/DynamicPage';

test('Dynamic loading handling', async ({ page }) => {
  const dynamic = new DynamicPage(page);

  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  await dynamic.startBtn.click();

  await expect(page.locator('#finish h4')).toHaveText('Hello World!', { timeout: 10000 });
});
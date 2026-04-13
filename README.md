## 📌 Overview
This is a Playwright automation framework built using TypeScript and Page Object Model (POM) design pattern. It supports UI automation, debugging, and HTML reporting.

---

## 🚀 Features
- Playwright Test Runner
- TypeScript support
- Page Object Model (Locators only)
- HTML Reports
- Debug mode (Inspector)
- Cross-browser execution

---

## 📁 Project Structure
```

playwright-framework/
│
├── pages/
│   ├── LoginPage.ts
│   ├── SauceDemoPage.ts
│   └── DynamicPage.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── checkout.spec.ts
│   ├── dynamic.spec.ts
│   └── debug.spec.ts
│
├── playwright.config.ts
├── package.json
└── README.md

````

---

## ⚙️ Installation

```bash
npm install
npx playwright install
````

---

## ▶️ Running Tests

### Run all tests

```bash
npx playwright test
```

### Run specific test file

```bash
npx playwright test tests/login.spec.ts
```

### Run tests in UI mode

```bash
npx playwright test --ui
```

### Run tests in debug mode (Inspector)

```bash
npx playwright test --debug
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

---

## 📊 Reports

### Generate & open HTML report

```bash
npx playwright show-report
```

---

## 🐞 Debugging

### Pause execution

```ts
await page.pause();
```

### Use Inspector

```bash
npx playwright test --debug
```

---

## 🧪 Sample Test

```ts
import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');

  await expect(page.locator('.post-title'))
    .toHaveText('Logged In Successfully');
});
```

---

## 📌 Page Object Example (Locators Only)

```ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  username = this.page.locator('#username');
  password = this.page.locator('#password');
  submitBtn = this.page.locator('#submit');
  successText = this.page.locator('.post-title');
  logoutBtn = this.page.locator('a:has-text("Log out")');
}
```

---

## 🏆 Best Practices

* Keep Page Objects only for locators
* Keep logic inside test files
* Use Playwright auto-waiting (avoid sleep/waitForTimeout)
* Use HTML reports for execution tracking

---

## 👨‍💻 Author

Playwright Automation Framework using TypeScript

```

---

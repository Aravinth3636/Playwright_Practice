import {chromium, test, expect } from '@playwright/test';

test('has title', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const context1 = await browser.newContext();
  

  //const browser1 = await firefox.launch();
  //const context2 = await browser1.newContext();
  const page1 = await context1.newPage();

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ browser }) => {
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();

  const page1 = await browserContext.newPage();


  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

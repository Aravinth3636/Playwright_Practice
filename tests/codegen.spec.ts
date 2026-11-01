import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Aravinth');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('aravinth@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.waitForTimeout(10000);
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('9865878452');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
});
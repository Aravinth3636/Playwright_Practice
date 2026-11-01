import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await expect(page.getByRole('button', { name: 'START' })).toBeVisible();
  await expect(page.locator('h3')).toContainText('Data Entry Form');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('aravinth');
  await expect(page.getByRole('textbox', { name: 'Enter Name' })).toHaveValue('aravinth');
});
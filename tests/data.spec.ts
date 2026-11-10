
import { test, expect } from '@playwright/test';

import fs from 'fs';

import{parse} from 'csv-parse/sync';

const csvpath = "testdata/login_test_data.csv";

const filecontent = fs.readFileSync(csvpath,'utf-8');

const records=parse(filecontent,{columns:true,skip_empty_lines:true});



test.describe('Login data driven test', () => {

for (const data of records as {email:string, password:string, validity:string}[]) {



        test(`Login test for ${data.email} and ${data.password}`, async ({ page }) => {

            await page.goto('https://demowebshop.tricentis.com/login');

            // Fill login form
            await page.locator('#Email').fill(data.email);
            await page.locator('#Password').fill(data.password);
            await page.locator('input[value="Log in"]').click();

            if (data.validity === 'valid') {

                // Assert logout link is visible - indicates successful login
                const logoutLink = page.locator('a[href="/logout"]');

                await expect(logoutLink).toBeVisible({ timeout: 5000 });

            } else {

                // Assert error message is visible
                const errorMessage = page.locator('.validation-summary-errors');

                await expect(errorMessage).toBeVisible({ timeout: 5000 });

                // Assert user is still on the login page
                await expect(page).toHaveURL(
                    'https://demowebshop.tricentis.com/login'
                );
            }

        });
}
});
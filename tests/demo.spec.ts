import { test, expect } from '@playwright/test';

test("Title of the google",async ({page})=>{

    await page.goto("https://www.google.com/");  //browser will be called

    let title:string = await page.title();

    console.log(title);

    await expect(page).toHaveTitle("Google");




})
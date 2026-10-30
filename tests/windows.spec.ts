
//browser - chromium(Edge,chrome),firefox,safari - the browser instance 
//context - it a isolated browser session 
//page - a singlr tab or popup inside a browser

import{test,expect,chromium} from 'playwright/test';

test("window handling",async()=>{

    const browser = await chromium.launch({headless:false});

    const context1 = await browser.newContext();
    const page1    = await context1.newPage();

    await page1.goto("https://www.google.com/");
    await page1.waitForTimeout(3000);


    const context2 = await browser.newContext();
    const page2   = await context2.newPage();

    await page2.goto("https://www.bing.com/");

     await page1.waitForTimeout(3000);

    await expect(page1).toHaveTitle("Google");
    await expect(page2).toHaveTitle("Search - Microsoft Bing");




})

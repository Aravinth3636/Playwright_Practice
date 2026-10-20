import {test,expect, Locator} from 'playwright/test'

test("auto suggested Dropdowns", async({page})=>
{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("input.oxd-input[name='username']").fill("Admin");

    await page.locator("input.oxd-input[type='password']").fill("admin123");

    await page.locator("button[type='submit']").click();

    await page.waitForTimeout(3000);

    await page.getByText("PIM").click();

    await page.locator("form i").nth(2).click();

    await page.waitForTimeout(3000);

    const elements = page.locator("div[role='listbox'] div");

    const count = await elements.count();

    console.log(count);

    console.log(await elements.allTextContents());

    //Automaton Tester - click on this

})
import{test,expect,Locator} from 'playwright/test';

test("action methods",async({page})=>{

    await page.goto("https://playwright.dev/");

    //getbytext() - locatingyour web element with the text value

    const loc:Locator =  page.getByText("Playwright Test");

    await expect(loc).toHaveText("Playwright Test");


})

test("alttext",async({page})=>{

    await page.goto("https://playwright.dev/");

    //getbytext() - locatingyour web element with the text value

    const loc:Locator =  page.getByAltText("Adobe");

    await expect(loc).toBeVisible();
})

test("label",async({page})=>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    //getbytext() - locatingyour web element with the text value

    const loc =  await page.getByLabel("Username").fill("Arvi");

    await page.waitForTimeout(3000);
})

test("placeholder",async({page})=>{

    await page.goto("https://support.kaspersky.com/ksos/8.27/331646?cid=KSOSPC_21.27&utm_source=interceptor&utm_medium=product&utm_campaign=KSOSPC_21.27");

    //getbytext() - locatingyour web element with the text value

    const loc:Locator =  page.getByPlaceholder("Search");

    await expect(loc).toBeVisible();
})

test("title",async({page})=>{

    await page.goto("https://playwright.dev/docs/locators#locate-by-role");

    //getbytext() - locatingyour web element with the text value

    const loc =  await page.getByTitle("Installation");

  await loc.click()

  await page.waitForTimeout(3000);
})

test.only("test id",async({page})=>{

    await page.goto("https://playwright.dev/docs/locators#locate-by-role");

    //getbytext() - locatingyour web element with the text value

    const loc =  await page.getByTestId("directions");

    await expect(loc).toHaveText("Itinéraire");

 

  await page.waitForTimeout(3000);
})
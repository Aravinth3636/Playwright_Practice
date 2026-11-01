import{test,expect} from 'playwright/test';

test("assertion",async({page})=>{


    //auto retrying assertion
await page.goto("https://demowebshop.tricentis.com/");

await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

const text = page.locator("//h2[normalize-space()='Welcome to our store']");
await expect(text).toBeVisible();

const title = await page.title();
console.log(title);

//non-retrying assertions
expect(title.includes('Demo Web Shop')).toBeTruthy();

// .not(negating matcher) (applicable for both auto retrying and non retrying)
//Welcome to our store shop

await expect(text).not.toBeVisible();
expect(title.includes('Demo Web Shop')).toBeFalsy();



})
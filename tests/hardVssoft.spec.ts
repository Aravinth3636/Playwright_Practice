//1)Hard assertion

import{test,expect} from 'playwright/test';

test("hard vs soft assertion",async({page})=>{

await page.goto("https://demowebshop.tricentis.com/");

 await expect(page).toHaveTitle("Demo Web Shop2");    //program will be terminated here

await expect(page).toHaveURL("https://demowebshop.tricentiss.com/");
//requirement - https://demowebshop.tricentis.com/
const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
await expect(logo).toBeVisible(); 


//soft assertion

/* await expect.soft(page).toHaveTitle("Demo Web Shop2");    //program will be terminated here
await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");

const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
await expect.soft(logo).toBeVisible(); */

})
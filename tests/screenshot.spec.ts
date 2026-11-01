import{test,expect} from '@playwright/test';

test("screenshot",async({page})=>{

await page.goto("https://demowebshop.tricentis.com/");

//page.screenshot();

//await page.screenshot({path:'screenshots/currenthomepage.png'});
const timestamp = Date.now();
await page.screenshot({path:'screenshots/' + 'currentfullpage' + timestamp+ '.png',fullPage:true});

const logo = page.locator("img[alt='Tricentis Demo Web Shop']");
await logo.screenshot({path:'screenshots/' + 'locatorss' + timestamp + '.png'});




})
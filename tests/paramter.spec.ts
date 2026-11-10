import{test,expect } from '@playwright/test';



//pameterization
const searchitems:string[] = ["laptop","Gift card","smartphone","Monitor"];

test.describe("Search test cases", ()=>{
for(const item of searchitems)
{

test(`parameter test ${item}`, async ({ page }) => {

await page.goto("https://demowebshop.tricentis.com/");

await page.locator("#small-searchterms").fill(item);

await page.locator("input[value='Search']").click();

})

}


})



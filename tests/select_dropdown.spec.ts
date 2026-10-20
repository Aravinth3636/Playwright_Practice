import {test,expect,Locator} from '@playwright/test'

test("Dropdown using select",async({page})=>{

await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");


/* await page.locator(".form-select[id='state']").selectOption("NCR");//visible text present in our DOM

await page.waitForTimeout(2000);

await page.locator(".form-select[id='state']").selectOption({value:'Uttar Pradesh'});//value attribute present in our DOM

await page.waitForTimeout(2000);
await page.locator(".form-select[id='state']").selectOption({label:'Haryana'});//label value from the DOM


//index value staRT FROM 0.

await page.waitForTimeout(2000);
await page.locator(".form-select[id='state']").selectOption({index:4});

await page.waitForTimeout(2000); */

await page.locator(".form-select[id='state']").selectOption({index:4});
await page.waitForTimeout(2000);

await expect(page.locator(".form-select[id='state']")).toHaveValue("Rajasthan");

const elements:Locator=page.locator("#state>option");

//await expect(elements).toHaveCount(10);

const alltext:string[]=await elements.allTextContents();

console.log(alltext);

expect(alltext).toEqual([ 'Choose State', 'NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan' ]);




})
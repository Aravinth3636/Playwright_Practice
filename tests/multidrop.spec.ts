import {test,expect,Locator} from '@playwright/test'

test("Dropdown using select",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");


//await page.locator("select#colors").selectOption(['Red','White','Blue']);

//await page.locator("select#colors").selectOption(['Red','White','Yellow']);

//await page.locator("select#colors").selectOption([{label:'Red'},{label:'Blue'},{label:'Yellow'}]);

await page.locator("#colors").selectOption([{index:0},{index:1},{index:2}]);

await page.waitForTimeout(4000);

const elements:Locator=page.locator("select#colors>option");

await expect(elements).toHaveCount(7);

const text:string[] = (await elements.allTextContents()).map((text)=>text.trim()); ;

console.log(text);

expect(text).toEqual(['Red','Blue','Green','Yellow','Red','White','Green']);






})
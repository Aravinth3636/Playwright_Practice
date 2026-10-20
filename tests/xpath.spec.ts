//xpath - XML path

//absolute xpath - which will start with / some webelement it will woprk with //

//"xpath = /absolute xpath value"

//relative xpath - which will start with //

//tagname[@attritibute name="attribute value"]

//xpath with single attribute

//--//img[@alt='Tricentis Demo Web Shop']

//xpath with 2 attribute val;ues

//input[@type='text'][ @value='Search store']

//xapth with and operator

//input[@type='text' and @value='Search store']

//xapth with or operator

//input[@type='submit' or @value='Search']

import{test,expect,Locator} from 'playwright/test'

test("xapth",async({page})=>{

await page.goto("https://demowebshop.tricentis.com/");

const logo:Locator=page.locator("xpath=/html/body/div[4]/div[1]/div[1]/div[1]/a/img");

await expect(logo).toBeVisible();

const logo1:Locator=page.locator("//img[@alt='Tricentis Demo Web Shop']");

await expect(logo1).toBeVisible();

//contains() - locate the group of web elements - common attribute val;ues

//tagname[contains(@attribute name,attribute value)]

const computer:Locator=page.locator("//h2/a[contains(@href,'computer')]");

await page.waitForTimeout(3000);

const comptutercount:number = await computer.count();

console.log(comptutercount);

expect(comptutercount).toBe(4);

//console.log(await computer.textContent);//Error: strict mode violation: locator resolved to 4 elements

console.log(await computer.first().textContent());//return the first element text value

console.log(await computer.last().textContent());

console.log(await computer.nth(1).textContent());

console.log(await computer.allTextContents());

//starts-with() - locate the list of web element swhich is start from few name

const build:Locator = page.locator("//h2/a[starts-with(@href,'/build')]");

const buildcount:number = await build.count();

console.log(buildcount);

expect(buildcount).toBe(3);

const buildvalues:string[]=await build.allTextContents();

console.log(buildvalues);


//text() - which willl fetch the text value present inside

const register=page.locator("//a[.='Register']");

//text()=  - .

await expect(register).toBeVisible();

//normalize-space() = "Register       " //trim()

const register1=page.locator("//a[normalize-space()='Register']");

await expect(register1).toBeVisible();










})



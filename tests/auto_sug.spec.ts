import {test,expect, Locator} from 'playwright/test'

test("auto suggested Dropdowns", async({page})=>
{

await page.goto("https://www.flipkart.com/");


const closebutton = page.getByRole('button',{name: '✕'});

await page.waitForTimeout(3000);



await closebutton.click();

const searchbox:Locator = page.getByRole('textbox',{name:"Search for Products, Brands and More"});



await expect(searchbox).toBeVisible();

await searchbox.fill("mobiles");

await page.waitForTimeout(3000);


//freeze your web page - ctrl + shift + P - 

const options:Locator = page.locator("ul>li");

const count = await options.count();

console.log(count);//8

/* for(let i = 0;i<count;i++)
{
    const text = await options.nth(i).textContent();
    console.log(text);
} */

for(let i = 0;i<count;i++)
{
    const text = await options.nth(i).textContent();

    if(text ==="mobiles under 10000")
    {
        await options.nth(i).click();
        break;
    }
    
}



await page.waitForTimeout(3000);










})
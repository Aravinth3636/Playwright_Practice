import{test,expect,Locator} from 'playwright/test'

test("datepickers",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dateinputbox:Locator = page.locator("input#datepicker");

    await expect(dateinputbox).toBeVisible();

// (mm/dd/yyyy)

    //dateinputbox.fill("10/28/2026");

    //await page.waitForTimeout(3000);

    //10/15/2027

    await dateinputbox.click();

    const month:string = "June";
    const date:string  = "28"
    const year:string  = "2020";

    const nextpage:boolean = true;

while(nextpage)
{
    const currentmonth = await page.locator("span.ui-datepicker-month").textContent();
    const currentyear  = await page.locator("span.ui-datepicker-year").textContent();

    if(currentmonth===month && currentyear===year)
    {
      break;
    }

    await page.locator("span.ui-icon.ui-icon-circle-triangle-w").click();
}
    
await page.waitForTimeout(3000);

const alldates:Locator[] = await page.locator("table.ui-datepicker-calendar tbody td").all();

for(let dt of alldates)
{
    const datetext:string = await dt.innerText();
    if(datetext===date)
    {
        await dt.click();
        break;
    }
}

await page.waitForTimeout(5000);


})
import{test,expect,Locator} from 'playwright/test';

test("dynamic web table",async({page})=>{

await page.goto("https://practice.expandtesting.com/dynamic-table");

const rows:Locator[]=await page.locator("table.table tbody tr").all();

console.log(rows.length);

expect(rows).toHaveLength(4);

let cpuload:string='';
for(const row of rows)
{
    const processorname:string = await row.locator("td").nth(0).innerText();
    //console.log(processorname);

    if(processorname==="Chrome")
    {
        cpuload = await row.locator('td:has-text("%")').innerText();
        console.log(cpuload);
        break;
    }
}

await page.waitForTimeout(3000);

const chromebox:string = await page.locator("p#chrome-cpu").innerText();
console.log(chromebox);

if(chromebox.includes(cpuload))
{
   console.log("CPU load is equal");
}
else
{
    console.log("CPU load is not equal");
}

expect(chromebox).toContain(cpuload); //Chrome CPU: 0.4% - contains - 0.4%


})
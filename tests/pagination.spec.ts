import{test,expect,Locator} from 'playwright/test'

test("Pagination",async({page})=>{

   await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");
   
   

   let availablepage:boolean=true;
   
while(availablepage){
  const rows:Locator[] = await page.locator("table#example tbody tr").all();
  for(let row of rows)
   {
    console.log(await row.innerText());
   }

   await page.waitForTimeout(3000);
   let nextbutton:Locator = page.locator("button[aria-label='Next']");

   if(await nextbutton.isDisabled())
   {
    availablepage=false;
   }
   else
   {
    await nextbutton.click();
   }

}

})
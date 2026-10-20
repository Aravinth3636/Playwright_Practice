import{test,expect,Locator} from 'playwright/test';

test("action methods",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const textbox:Locator=page.locator("input#name");

    expect(textbox).toBeVisible();//element is visible in our webpage
    expect(textbox).toBeEnabled();//element is enabled and can accept user interactions.

    const maxlength:string|null=await textbox.getAttribute("maxlength");//return a ayttribute valye of an el;ement;

    console.log(maxlength);

    expect(maxlength).toBe("15");

    await textbox.fill("Arvinth");

    await page.waitForTimeout(3000);

    const text:string = await textbox.inputValue();

    console.log(text);

    await expect(text).toBe("Arvinth");

    await page.waitForTimeout(3000); 


})


test("Radio buttons",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const maleradiobutton:Locator = page.locator("input#male");

    await expect(maleradiobutton).toBeVisible();
    await expect(maleradiobutton).toBeEnabled();

    expect(await maleradiobutton.isChecked()).toBe(false);  //return a true statement if my radio button was enabled already

    await maleradiobutton.check();

    expect(await maleradiobutton.isChecked()).toBe(true);

    await page.waitForTimeout(5000);




})

test.only("Checkboxes",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const checkbox:Locator = page.locator("input#sunday");

    await checkbox.check();

    expect(await checkbox.isChecked());

    await page.waitForTimeout(3000);

    const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];

    for(let day of days)
    {
       const checkboxes:Locator= page.locator(`input#${day}`);

       await checkboxes.check();
       await expect (checkboxes).toBeChecked();//true by checjing on our checkbox
    }
  await page.waitForTimeout(5000);

   
    for(let day of days)
    {
       const checkboxes:Locator= page.locator(`input#${day}`);

       await checkboxes.uncheck();
       await expect (checkboxes).not.toBeChecked();//it should not be checked

        
    }

     await page.waitForTimeout(5000);
})
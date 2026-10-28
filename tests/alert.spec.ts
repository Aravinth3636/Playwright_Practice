import{test,expect,Locator} from 'playwright/test'

test("simple alert",async({page})=>{


//page.on('dialog', ()=>1{


//})
//dialog.type() -> find the type of our dialog
//dialog.message() -> retrive the pop up message
//dialog.accept("parameter value") -> accept our dialog box - clicking on ok
//dialog.dismiss() -> to cancel button
//dialog.defaultValue() -> fetch the default value present in your popup prompt field

//alert
//confirm
//prompt

await page.goto("https://testautomationpractice.blogspot.com/");

page.on('dialog',(dialog)=>{

console.log("Dialog type is: ",dialog.type());

expect(dialog.type()).toContain("alert");

console.log("Dialog message is:",dialog.message());

expect(dialog.message()).toContain("I am an alert box!");



dialog.accept();

});

await page.locator("//button[@id='alertBtn']").click();

await page.waitForTimeout(5000);

})

test("Confirm dialog",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

page.on('dialog',(dialog)=>{

console.log("Dialog type is: ",dialog.type());

expect(dialog.type()).toContain("confirm");

console.log("Dialog message is:",dialog.message());

expect(dialog.message()).toContain("Press a button!");

dialog.dismiss();

});

await page.locator("//button[text()='Confirmation Alert']").click();

const textoutput:string =await page.locator("#demo").innerText();

console.log(textoutput);

await page.waitForTimeout(5000);

})

test("prompt dialog",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

page.on('dialog',(dialog)=>{

console.log("Dialog type is: ",dialog.type()); //prompt

expect(dialog.type()).toContain("prompt");

console.log("Dialog message is:",dialog.message());

expect(dialog.message()).toContain("Please enter your name:");

expect(dialog.defaultValue()).toContain("Harry Potter");

//dialog.accept("Aravind");

dialog.dismiss();

});

await page.locator("//button[@id='promptBtn']").click();

const textoutput:string =await page.locator("#demo").innerText();

console.log(textoutput);

await page.waitForTimeout(5000);

})


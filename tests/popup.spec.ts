import{test,expect,chromium,Page} from 'playwright/test'

test("pop up handling",async()=>{

const browser = await chromium.launch({headless:false});
const context = await browser.newContext();
const page    = await context.newPage();

await page.goto("https://testautomationpractice.blogspot.com/");

await Promise.all([page.waitForEvent('popup'),page.locator("button#PopUp").click()]);

const allpopupwindow:Page[] = context.pages();

console.log(allpopupwindow[0].url());
console.log(allpopupwindow[1].url());




})
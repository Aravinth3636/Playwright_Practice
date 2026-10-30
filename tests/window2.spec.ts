import{test,expect,chromium,Page} from 'playwright/test'

test("window tab handling",async()=>{

const browser = await chromium.launch({headless:false});
const context = await browser.newContext();
const parentpage    = await context.newPage();

await parentpage.goto("https://testautomationpractice.blogspot.com/");

const [childpage]:[Page, void] = await Promise.all([ context.waitForEvent('page'), parentpage.locator("//button[text()='New Tab']").click()]);

const pages = context.pages();
console.log(pages.length);

console.log(await parentpage.title());
console.log(await childpage.title());

//console.log(await pages[1].title());

})
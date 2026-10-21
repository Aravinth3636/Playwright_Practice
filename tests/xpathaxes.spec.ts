/* xapth axes - if an element is not having any kind of attributes we can use xpath axes

--css selsctor will ove from top to bottom

--xpath axes can movce from top to bottom as well as bottom to top

self

parent

child

following-sibling

preceding-sibling

ancestor

descendant

preceding

following

//syntax

//tagname[@attributename=attribute value]/relationship::tagname */


import{test,expect,Locator} from 'playwright/test'

test("xpath axes",async({page})=>{

await page.goto("https://www.w3schools.com/html/html_tables.asp");   

const germanycell:Locator=page.locator("//td[text()='Germany']");

//"//td[text()='Germany']/self::td"

await expect(germanycell).toHaveText("Germany");

//parent

const germanyparent:Locator=page.locator("//td[text()='Germany']/parent::tr");

console.log(await germanyparent.allTextContents());

//child

const childelements:Locator=page.locator("//table[@id='customers']//tr[1]/child::th");

console.log(await childelements.allTextContents());

await expect(childelements.last()).toHaveText("Country");

await expect(childelements).toHaveCount(3);

//ancestor

const table:Locator=page.locator("//td[text()='Germany']/ancestor::table");

await expect(table).toHaveAttribute("id","customers");

//descendent

const descen:Locator = page.locator("//table[@id='customers']/descendant::td");
await expect(descen).toHaveCount(18);

//following

const followng:Locator=page.locator("//td[text()='Germany']/following::td");
await expect(followng).toHaveCount(35);

//following-sibling

const followingsibling:Locator = page.locator("//td[text()='Maria Anders']/following-sibling::td");
await expect(followingsibling).toHaveCount(1);

//preceding-sibling

const precedsibling:Locator = page.locator("//td[text()='Maria Anders']/preceding-sibling::td");
await expect(precedsibling).toHaveCount(1);

//preceding

const preceding:Locator = page.locator("//td[text()='UK']/preceding::td");
await expect(preceding).toHaveCount(11);













})
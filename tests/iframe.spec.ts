import{test,expect,Locator,Frame} from 'playwright/test';

test("iframe",async({page})=>{

await page.goto("https://ui.vision/demo/webtest/frames/");

const frames:Frame[] = page.frames();

//page.frames() - find how many frames are present in out current web page

console.log(frames.length); //length of an array

//2 approches

//1)page.frame()
//2)page.framelocator()

//apprach -> 1 page.frame()
const frame1:Frame | null = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"});

if(frame1)
{
    await frame1.locator("[name='mytext1']").fill("Aravinth");
}
else
{
    console.log("Frame is not aviablae");
}
await page.waitForTimeout(3000);

//2)page.framelocator()

const inputbox:Locator=page.frameLocator('[src="frame_1.html"]').locator("[name='mytext1']");

inputbox.fill("Pavithra");

await page.waitForTimeout(3000);


})

test.only("child frames",async({page})=>{

await page.goto("https://ui.vision/demo/webtest/frames/");

const frame3:Frame | null = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3'});

if(frame3)
{
    //validation 1
    await frame3.locator("[name='mytext3']").fill("Arvind");
    //validation 2
    const child:Frame[]= frame3.childFrames();
    console.log(child.length);

    const radio:Locator = child[0].getByLabel("I am a human");

    await radio.check();

    await expect(radio).toBeChecked();

}
else
{
    console.log("frame is not available");
}

await page.waitForTimeout(3000);

})
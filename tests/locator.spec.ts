//identify our web element - action - assertion

//built in locator - 1st priority
//css selector - 2nd
//Xpath - 3rd


//getByAltText() - identifies images based on alt attribute

import { test, expect,Locator } from '@playwright/test';

test("locators - alttext", async ({page})=>{

await page.goto("https://playwright.dev/docs/locators#locate-by-role");

await expect(page.getByTestId("directions")).toHaveText("Itinéraire");

})

//getByText() - loacte by visible text

//getByRole(button,{name:""}) - many aria role to find our web elements

//implicit role - our tag name and aria role is same
//explicit role - our tag name and aria role name is different

//getByLable() - for our form control

//type - in the prevuoius version of playwright now it got depriciated
//fill() - is used to update a value to the field column

//getByPlaceholder - find element with a placeholder attribute placeholder = "first name"

//getByTitle - locate element by it's title attribute title = "last name"

//getByTestid() - locate element by it's testid as a attribute testid = "sign in";


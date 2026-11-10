//annotation - provides additional information about our test and it help us to control the executio of the test cases

//test.only() -> it will execute the particukar test case
//test.skip() -> it will skip the particulare test case
//test.fixme() -> it will also skip the test case() if it is incomplete
//test.fail() -> if we want to fail the particular
//test.slow() - increase the time for execution

import { test, expect } from '@playwright/test';

test.describe("E-commerce application test", () => {


// Executes once per worker
test.beforeAll("Before all test execution", async () => {
    console.log("Execution begins here");
});

// Executes before every test
test.beforeEach("Before each test", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
});

// Executes after every test
test.afterEach("After each test", async () => {
    console.log("This test case was completed");
});

// Executes once per worker
test.afterAll("After all test execution", async () => {
    console.log("All test cases were completed");
});

// Test Case 1: Login
test("Verify Login", async ({ page }) => {

    console.log("Test 1");

    await page.locator(".ico-login").click();

    await expect(page.locator("#Email")).toBeVisible();

});

// Test Case 2: Registration
test.skip("Register", async ({ page }) => {

    console.log("Test 2");

    await page.locator(".ico-register").click();

    await expect(page.locator("#gender-male")).toBeVisible();

});

// Test Case 3: Featured Products
test.fixme("Featured products", async ({ page }) => {

   // test.slow();//triple the time - default wait time of 30 seconds - 90 seconds

    console.log("Test 3");

    await expect(page.locator(".product-grid")).toBeVisible();

});


});

/* sequential order

test 1 -> 10 sec
test 2 -> 10 sec
test 3 -> 10 sec

paralle testing

test 1 -> , test 2 ->  test 3 ->  --- parallel testing - 10

playwright.config.ts

fullparallel: true;
workers:10 */

import{test,expect} from '@playwright/test';

//test.describe.configure({mode:'parallel'})

test.describe("Parallel test", ()=>{

test("test 1", async({page})=>{

console.log("This is Test 1")

})
test("test 2", async({page})=>{

console.log("This is Test 2")

})
test("test 3", async({page})=>{

console.log("This is Test 3")

})
test("test 4", async({page})=>{

console.log("This is Test 4")

})

})

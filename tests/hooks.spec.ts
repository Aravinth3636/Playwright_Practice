//hooks - which is going to have common setup and cleup activities
//types - 
// beforeall() - before executing all the testcases
// ,afterall(), - after executing all your test cases
//  beforeeach()  - execute before each test cases
// aftereach() - after executing each test cases

import{test,expect} from '@playwright/test';

test.describe("Test hooks", ()=>{

    test.beforeAll("Beofore all", async()=>{
        console.log("This is before all");
    })
        test.afterAll("after all all", async()=>{
        console.log("This is after all");
    })

      test.beforeEach("Beofore each", async()=>{
        console.log("This is before each");
    })
   test.afterEach("Beofore after", async()=>{
        console.log("This is after each");
    })


test("test 1",async()=>{

console.log("This is test 1");
});
test("test 2", async()=>{

console.log("This is test 2");
});
test("test 3", async()=>{

console.log("This is test 3");
});
test("test 4", async()=>{

console.log("This is test 4");
});



})


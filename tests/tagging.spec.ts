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


test("test 1",{tag:"@sanity"},async()=>{

console.log("This is test 1");
});
test("test 2", {tag:"@regression"},async()=>{

console.log("This is test 2");
});
test("test 3", {tag:["@sanity","@regression"]},async()=>{

console.log("This is test 3");
});
test("test 4",{tag:"@regression"}, async()=>{

console.log("This is test 4");
});



})

//(?=.*@sanity)(?=.*@regression)

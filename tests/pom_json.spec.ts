import{test,expect} from '@playwright/test';
import{LoginPage} from '../pages/loginpage';
import fs, { readFileSync } from 'fs';

const jsonpath= 'testdata/data.json';
const loginData=JSON.parse(fs.readFileSync(jsonpath,'utf-8'));
//export //import

test.describe('Login data driven test', () => {

for (const { email, password, validity } of loginData) {

        test(`Login test for ${email} and ${password}`, async ({ page }) => {

         const loginpage = new LoginPage(page);

         await loginpage.navigate();

         await loginpage.login(email,password);

         if(validity==='valid')
         {
           await expect(loginpage.logoutLink).toBeVisible({timeout:5000});
         }
         else
         {
            await expect(loginpage.errorMessage).toBeVisible({timeout:5000});
                await expect(page).toHaveURL(
                    'https://demowebshop.tricentis.com/login'
                );
         }

        });
    }
});
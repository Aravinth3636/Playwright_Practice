import{Page,Locator} from '@playwright/test';

export class LoginPage{

    readonly page:Page;
    readonly email:Locator;
    readonly password:Locator;
    readonly loginButton:Locator;
    readonly logoutLink:Locator;
    readonly errorMessage:Locator;

    constructor(page:Page)
    {
      this.page = page;
      this.email = page.locator('#Email');
      this.password=page.locator('#Password');
      this.loginButton = page.locator('input[value="Log in"]');
      this.logoutLink=page.locator('a[href="/logout"]');
      this.errorMessage=page.locator('.validation-summary-errors');
    }

    async navigate()
    {
        await this.page.goto('https://demowebshop.tricentis.com/login'); 
    }

    async enteremail(email:string)
    {
        await this.email.fill(email);
    }

    async enterpassword(password:string)
    {
        await this.password.fill(password);
    }

    async clicklogin()
    {
        await this.loginButton.click();
    }

    async login(email:string,password:string)
    {
        await this.enteremail(email);
        await this.enterpassword(password);
        await this.clicklogin();
    }
}
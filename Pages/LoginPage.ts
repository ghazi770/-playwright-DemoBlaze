import { Page, Locator } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly log_op: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.log_op = page.locator('#login2');
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.loginButton = page.locator('button[onclick="logIn()"]');
    
    }

    async gotoLoginPage() {
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async login(user: string, pass: string) {
        await this.log_op.click();
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }
}
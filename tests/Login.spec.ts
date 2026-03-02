import { expect, test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('invalid login test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login("Username", "Password");

});
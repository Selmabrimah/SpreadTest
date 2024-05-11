/// <reference types ="cypress" />
import LoginPage from '../support/POM/loginData.js';
const loginPage = new LoginPage();

describe('Login Feature With POM', () => {


    it('Verify User Can Login with right Credentials', () => {
        loginPage.visitLoginPage();
        loginPage.fillLoginValuesAndClickBtn(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
        loginPage.verifyLoginSuccess();
    });

    it('Verify User Cannot Login with wrong Credentials', () => {
        loginPage.visitLoginPage();
        loginPage.fillLoginValuesAndClickBtn('Admin','Admin')
        loginPage. verifyLoginFailure();
    });
});
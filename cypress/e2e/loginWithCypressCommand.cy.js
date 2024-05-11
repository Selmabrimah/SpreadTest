/// <reference types ="cypress" />
import LoginPage from '../support/POM/loginData.js';
const loginPage = new LoginPage();
describe('Login Feature With the use of cypress Command', () => {


    it('Verify User Can Login with right Credentials', () => {
       cy.login(Cypress.env('USERNAME'),Cypress.env('PASSWORD'))
        loginPage.verifyLoginSuccess();
    });

    it('Verify User Cannot Login with wrong Credentials', () => {
        const username= 'Admin';
        const password= 'admin';
        cy.login(username,password)
        loginPage.verifyLoginFailure();
    });
});
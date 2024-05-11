const logo ='[src="/web/images/ohrm_branding.png?v=1711595107870"]'
const userNameField='[placeholder="Username"]'
const passwordField='[placeholder="Password"]'
const loginBtn='[type="submit"]'
const invalidLabel='.oxd-alert-content'

export class LoginPage {
    visitLoginPage() {
        cy.visit('/');
    }

    fillLoginValuesAndClickBtn(username,password) {
        cy.get(logo).should('be.visible');
        cy.get(userNameField).type(username);
        cy.get(passwordField).type(password);
        cy.get(loginBtn).click();
    }

    verifyLoginSuccess() {
        cy.url().should('include', 'dashboard');
    }
    verifyLoginFailure() {
        cy.url().should('not.include', 'dashboard');
        cy.get(invalidLabel).should('have.text', 'Invalid credentials');
        cy.url().should('include', 'auth/login');

    }
}

export default LoginPage;

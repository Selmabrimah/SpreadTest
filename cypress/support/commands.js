// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const registerBtn='[href="/register"]'
const userNameField='[placeholder="Username"]'
const emailField='[placeholder="Email"]'
const passwordField='[placeholder="Password"]'
const loginBtn='button[type="submit"]'


Cypress.Commands.add('signUp', (username,email,password) => {
    cy.visit('/');
    cy.get(registerBtn).click()
    cy.url().should('include','/register')
    cy.get(userNameField).type(username);
    cy.get(emailField).type(email);
    cy.get(passwordField).type(password,{log:false});
    cy.get(loginBtn).click();
    cy.wait(3000);
    cy.clearAllLocalStorage()
})


Cypress.Commands.add('login', (email,password) => {
    cy.visit('/login')
    cy.get(emailField).type(email);
    cy.get(passwordField).type(password,{log:false});
    cy.get(loginBtn).click();
    cy.wait(3000);
})

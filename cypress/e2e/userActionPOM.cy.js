
/// <reference types ="cypress" />

import { faker } from '@faker-js/faker';
import UserActionPage from '../support/POM/userActionData'
let userActions =new UserActionPage();

let name,email,date,updatedUserName;
name = faker.person.fullName();
email = faker.internet.email();
date = new Date()
updatedUserName=`Selma ${faker.person.lastName()} ${date}`

describe('User actions with POM',()=> {
    before(() => {
       cy.signUp(name,email,Cypress.env('PASSWORD'))

    })

    describe('Login Actions', () => {
        beforeEach(() => {
            userActions.visitHomePage()

        })

        it('should verify that user Can Login with right Credentials', () => {
            userActions.verifyUserLogin(email, Cypress.env('PASSWORD'))
            cy.get('nav li').eq(3).should('contain.text', name)
        })

        it('should verify that user Canmot Login with wrong Credentials', () => {
            userActions.verifyUserLogin('Admin@gmail.com', 'admin123456')
            cy.get('app-list-errors').should('contain.text', 'email or password is invalid')
        })


    })


    describe('Editing Profile', () => {


        beforeEach(() => {
            userActions.visitHomePage()
        })
        it('should verify that user Can change username', () => {
            cy.login(email, Cypress.env('PASSWORD'))
            userActions.editUsername(updatedUserName)
        })
    })


    describe('Article Feature', () => {
        before(() => {
            cy.clearAllLocalStorage()
            cy.intercept('POST', '/api/articles/').as('createArticle')
            cy.login(email, Cypress.env('PASSWORD'))
        })

        beforeEach(() => {
            cy.intercept('POST', '/api/articles/').as('createArticle')

        })
        it('should verify that user Can add an article (UI)', () => {
            userActions.addNewArticle()
            cy.wait('@createArticle')
            cy.get('@createArticle').then((xhr) => {
                expect(xhr.response.body.article.title).to.equal('I am an article')
                expect(xhr.response.body.article.description).to.equal('Selma\'s article')
                expect(xhr.response.statusMessage).to.equal('Created')

            })
        })
    })


})


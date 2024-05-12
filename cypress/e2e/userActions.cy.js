/// <reference types ="cypress" />

import { faker } from '@faker-js/faker';

let name,email;
name = faker.person.fullName();
email = faker.internet.email();
let date = new Date()
let updatedUserName=`Selma ${faker.person.lastName()} ${date}`

describe('User actions',()=>{
    before(()=>{
        cy.signUp(name,email,Cypress.env('PASSWORD'))
       
    })

describe('Login Actions',()=>{
  beforeEach(()=>{
    cy.visit('')})

  it('should verify that user Can Login with right Credentials',()=>{
    cy.get('[href="/login"]').click()
    cy.url().should('include','/login')
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Password"]').type(Cypress.env('PASSWORD'))
    cy.get('button[type="submit"]').click()
    cy.wait(3000)
    cy.get('nav li').eq(3).should('contain.text',name)
  })

  it('should verify that user Canmot Login with wrong Credentials',()=>{
    cy.get('[href="/login"]').click()
    cy.url().should('include','/login')
    cy.get('[placeholder="Email"]').type('user@gmail.com')
    cy.get('[placeholder="Password"]').type(Cypress.env('PASSWORD'))
    cy.get('button[type="submit"]').click()
    cy.get('app-list-errors').should('contain.text','email or password is invalid')
  })
})


describe('Editing Profile',()=>{


  beforeEach(()=>{
      cy.visit('')
  })
  it('should verify that user Can change username',()=>{
  cy.login(email,Cypress.env('PASSWORD'))
  cy.get('[routerlink="/settings"]').click()
  cy.url().should('contain','settings')
  cy.get('[placeholder="Username"]').type(updatedUserName)
  cy.get('button[type="submit"]').click()
  cy.reload()
  cy.get('nav li').eq(3).should('contain.text',updatedUserName)
  })
})


describe('Article Feature',()=>{
  before(()=>{
      cy.clearAllLocalStorage()
      cy.intercept('POST','/api/articles/').as('createArticle')
      cy.login(email,Cypress.env('PASSWORD'))
  })

  beforeEach(()=>{ 
      cy.intercept('POST','/api/articles/').as('createArticle')

  })
  it('should verify that user Can add an article (UI)',()=>{
  cy.get('[routerlink="/editor"]').click()
  cy.url().should('contain','editor')
  cy.get('[placeholder="Article Title"]').type('I am an article')
  cy.get('[placeholder="What\'s this article about?"]').type("Selma's article")
  cy.get('[placeholder="Write your article (in markdown)"]').type("this is a brief article")
  cy.get('[placeholder="Enter tags"]').type("book")
  cy.get('[type="button"]').click()
  cy.wait('@createArticle')
  cy.get('@createArticle').then((xhr)=>{
      expect(xhr.response.body.article.title).to.equal('I am an article')
      expect(xhr.response.body.article.description).to.equal('Selma\'s article')
      expect(xhr.response.statusMessage).to.equal('Created')

  })
  })
})

})



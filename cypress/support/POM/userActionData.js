
const loginLocator='[href="/login"]'
const userNameField='[placeholder="Username"]'
const emailField='[placeholder="Email"]'
const passwordField='[placeholder="Password"]'
const loginBtn='button[type="submit"]'
const settingBtn ='[routerlink="/settings"]'
const articleLink= '[routerlink="/editor"]'
const articleTitle= '[placeholder="Article Title"]'
const articleDescription='[placeholder="What\'s this article about?"]'
const articleMarkdown= '[placeholder="Write your article (in markdown)"]'
const tags='[placeholder="Enter tags"]'
const createArticleBtn ='[type="button"]'




export class UserActionPage{

    visitHomePage(){
        cy.visit('')
    }

    verifyUserLogin(email,password){
        cy.get(loginLocator).click()
        cy.url().should('include','/login')
        cy.get(emailField).type(email)
        cy.get(passwordField).type(password,{log:false})
        cy.get(loginBtn).click()
        cy.wait(3000)

    }

    editUsername(updatedUserName){
        cy.get(settingBtn).click()
        cy.url().should('contain','settings')
        cy.get(userNameField).type(updatedUserName)
        cy.get(loginBtn).click()
        cy.reload()
        cy.get('nav li').eq(3).should('contain.text',updatedUserName)
    }

    addNewArticle(){
        cy.get(articleLink).click()
        cy.url().should('contain','editor')
        cy.get(articleTitle).type('I am an article')
        cy.get(articleDescription).type("Selma's article")
        cy.get(articleMarkdown).type("this is a brief article")
        cy.get(tags).type("book")
        cy.get(createArticleBtn).click()

    }

}

export default UserActionPage;

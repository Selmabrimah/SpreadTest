declare namespace Cypress {
    interface Chainable<Subject = any> {
        /***
         Logs the user in with the right Username and Password
         */
        login(username:string, password: string): void
        /***
        Create the user with provided username email and password
         */
        signUp(username:string,email:string,password:string):void
    }
}
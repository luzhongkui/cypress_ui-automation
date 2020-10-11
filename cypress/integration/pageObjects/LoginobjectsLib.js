
class loginObjects {
    email()   {return cy.get(':nth-child(1) > .form-control')}
    password(){return cy.get(':nth-child(2) > .form-control')}
    submit()  {return cy.get('.btn').contains("Sign in")}
}
export default loginObjects 

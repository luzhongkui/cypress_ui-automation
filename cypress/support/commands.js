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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import loginObjects from '../integration/pageObjects/LoginobjectsLib'

Cypress.Commands.add("SignIn",() => {

          var userName = Cypress.env("cy_userName")//defined in cypress.json
          var passWord = Cypress.env('cy_passWord')//defined in cypress.json
          cy.visit('/#/login')   

          cy.title().should('eq','Conduit')
          
          cy.location('protocol').should('eq','https:')
          expect(userName,"cy_userName set").to.be.a("string").and.not.be.empty
          cy.get(':nth-child(1) > .form-control').type(userName).should("have.value",userName)
          expect(passWord,"cy_passWord set").to.be.a("string").and.not.be.empty
          cy.get(':nth-child(2) > .form-control').type(passWord,{log:false}).should("have.value",passWord)
          cy.get('.btn').click()
          cy.wait(1000)
          cy.url()
          .should("contain","react-redux.realworld.io/#/?")
          .then($url => {
                 window.loggedInpage =$url
          })
          /*cy.getCookie("dca0d70b8a922a109bb875a83826bc7921602185058")
          .then($cookie =>{
                 window.appCookie = $cookie.value
          })*/
          cy.contains('Your Feed',{timeout:10000}).should('be.visible')
})
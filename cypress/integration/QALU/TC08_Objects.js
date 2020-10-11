
import loginObjects from '../pageObjects/LoginobjectsLib'
import postObjects  from '../pageObjects/postObjectsLib'
describe ('login',function(){
    const loginobjecs=new loginObjects()
    const postobjects=new postObjects()
       it('sign in',function (){
          cy.visit('https://react-redux.realworld.io/#/login')
          cy.title().should('eq','Conduit')
          cy.location('protocol').should('eq','https:')
          loginobjecs.email().type('luzhongkui@hotmail.com')
          loginobjecs.password().type('Luzk@19690210')
          loginobjecs.submit().should('be.visible').click()
          cy.contains('Your Feed',{timeout:10000}).should('be.visible')
    })
        it('Create a post',function(){
            postobjects.New_Post().should('be.visible').click()
            cy.location('hash').should('include','#/editor')
            postobjects.Article_Title().type('The First Post on Conduit')
            postobjects.Article_Subject().type('First article about Cypress Testing')
            postobjects.Article_Content().type('Cypress is an amazing automation test tool for Front End Testing')
            postobjects.Publish_Article().click()
            cy.url().should('include','article')    
        })
})
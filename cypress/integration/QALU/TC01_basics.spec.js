context ('login',( )=> {
       it('sign in', ()=>{
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
          /*cy.get('input[type="email"]').type('luzhongkui@hotmail.com')
          cy.get('input[type="password"]').type('Luzk@19690210')
          cy.get('.btn').should('be.visible').click()*/
          cy.contains('Your Feed',{timeout:10000}).should('be.visible')
    })
       /* it('Create a post',function(){
            cy.contains('New Post').should('be.visible').click()
            cy.location('hash').should('include','#/editor')
            cy.get('input[placeholder="Article Title"]').type('The First Post on Conduit')
            cy.get('input[placeholder="What\'s this article about?"]').type('First article about Cypress Testing')
            cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Cypress is an amazing automation test tool for Front End Testing')
            cy.contains('Publish Article').click()
            cy.url().should('include')    
        })*/
})



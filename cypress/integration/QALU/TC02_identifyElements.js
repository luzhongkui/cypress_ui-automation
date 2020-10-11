describe ('login',function(){
    it('sign in',function (){
       cy.visit('https://react-redux.realworld.io/#/login')
       cy.title().should('eq','Conduit')
       cy.location('protocol').should('eq','https:')

       cy.get('form').within(($form) => {
       cy.get('input[type="email"]').type('luzhongkui@hotmail.com')
       cy.get('input[type="password"]').type('Luzk@19690210')
       cy.root().submit() //submit a form
       })        
       cy.contains('Your Feed',{timeout:10000}).should('be.visible')
 })
    it('Create a post',function(){
            cy.get('ul.navbar-nav').children().contains('New Post').should('be.visible').click()
            cy.location('hash').should('include','#/editor')
        cy.get('form').within(($form) => {
            cy.get('input').first().type('The First Post on Conduit')
            cy.get('input').eq(1).type('First article about Cypress Testing')
            cy.get('textarea').last().type('Cypress is an amazing automation test tool for Front End Testing')
            cy.contains('Publish Article').click()
        })    
            cy.url().should('include','article')    
     })
    it('Mark-unmark as favorite',function(){
        cy.get('ul.navbar-nav').contains('luzhongkui').should('be.visible').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.wait(1000)
        cy.contains('Favorited Articles').click()
        cy.url().should('include','favorites')
        cy.wait(1000)
        cy.get('.ion-heart').first().click()
        cy.wait(1000)
        cy.reload()
        cy.contains('No articles are here... yet.').should('be.visible')
        cy.wait(1000)
        cy.go('back')
        

    })
})
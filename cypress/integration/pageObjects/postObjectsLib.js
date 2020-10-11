
class postObjects{
    New_Post()       {return cy.contains('New Post')}
    Article_Title()  {return cy.get('input[placeholder="Article Title"]')}
    Article_Subject(){return cy.get('input[placeholder="What\'s this article about?"]')}
    Article_Content(){return cy.get('textarea[placeholder="Write your article (in markdown)"]')}
    Publish_Article(){return cy.contains('Publish Article')}
}
export default postObjects
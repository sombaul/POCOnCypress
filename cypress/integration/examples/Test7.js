//cypress  - Spec

//Cypress Auto accepts alerts and pop ups
//Cypress have the capability to listen to browser events
//Mouse hover events are not supported in cypress. Alternatively use jquery or force click

describe('Mouse Hover', function(){
it('Mouse Hover Test Case', () => {

Cypress.on('uncaught:exception', (err, runnable) =>{
if(err.message.includes('$ is not defined')){
 return false;
}
});
    //expect(true).to.equal(false)
cy.visit("https://rahulshettyacademy.com/AutomationPractice/").then(() =>{
});

//cy.get("div.mouse-hover-content").invoke("show")
cy.contains("Top").click({force: true})
cy.url().should('include','top')





  });
});
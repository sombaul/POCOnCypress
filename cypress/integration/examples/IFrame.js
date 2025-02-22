//cypress  - Spec

//Cypress Auto accepts alerts and pop ups
//Cypress have the capability to listen to browser events
//Mouse hover events are not supported in cypress. Alternatively use jquery or force click

import 'cypress-iframe'
describe('Iframe', function(){
it('Iframe Test Case', () => {

Cypress.on('uncaught:exception', (err, runnable) =>{
if(err.message.includes('$ is not defined')){
 return false;
}
});
    //expect(true).to.equal(false)
cy.visit("https://rahulshettyacademy.com/AutomationPractice/").then(() =>{

cy.frameLoaded('#courses-iframe')

cy.iframe().find("a[href*='mentorship']").eq(0).then($link=>{

cy.wrap($link).click();
cy.iframe().find("h1[class*='pricing-title']").then(el =>{
expect(ele).to.have.length(2)
});


});


});







  });
});
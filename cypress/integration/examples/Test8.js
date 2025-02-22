//cypress  - Spec

//Cypress Auto accepts alerts and pop ups
//Cypress have the capability to listen to browser events
//Mouse hover events are not supported in cypress. Alternatively use jquery or force click

describe('Child Windows and Child tabs', function(){
it('Child Windows and Child Tabs Test Case', () => {

Cypress.on('uncaught:exception', (err, runnable) =>{
if(err.message.includes('$ is not defined')){
 return false;
}
});
    //expect(true).to.equal(false)
cy.visit("https://rahulshettyacademy.com/AutomationPractice/").then(() =>{
});

cy.get('#opentab').then(function(el)
{
const url = el.prop('href')
cy.visit(url)
cy.origin(url, ()=>{

cy.get("#navbarSupportedContent a[href='about.html']").click()

})

})





  });
});
//cypress  - Spec

//Cypress Auto accepts alerts and pop ups
//Cypress have the capability to listen to browser events

describe('Handling Child Windows', function(){
it('Should handle child window', () => {

Cypress.on('uncaught:exception', (err, runnable) =>{
if(err.message.includes('$ is not defined')){
 return false;
}
});
    //expect(true).to.equal(false)
cy.visit("https://rahulshettyacademy.com/AutomationPractice/").then(() =>{
});

cy.get('#opentab').invoke('removeAttr', 'target').click();

cy.origin("https://www.qaclickacademy.com", ()=>{

cy.get("#navbarSupportedContent a[href='about.html']").click();
cy.get(".mt-50 h2").should('contain','QAClick Academy');
})




  });
});
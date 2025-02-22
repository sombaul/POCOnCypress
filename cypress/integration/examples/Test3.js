//cypress  - Spec


describe('My First Test suite', function(){
it('My FirstTest case', () => {

Cypress.on('uncaught:exception', (err, runnable) =>{
if(err.message.includes('$ is not defined')){
 return false;
}
});
    //expect(true).to.equal(false)
cy.visit("https://rahulshettyacademy.com/AutomationPractice/").then(() =>{


});

 cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
 cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
  cy.get('input[type="checkbox"]').check(['option2','option3'])


  //Static Dropdowns
  cy.get('select').select('option2').should('have.value','option2')

  //Dynamic Dropdowns
//  cy.get('#autocomplete').type('Ind')
//  cy.get('.ui-menu-item div').each(($el, index, $list) => {
//
//  if($el.text()==='India')
//  {
//    $el.click()
//  }
//  })
//  cy.get('#autocomplete').should('have.value','India')

  //visible Invisible

  cy.get('#displayed-text').should('be.visible')
  cy.get('#hide-textbox').click()
  cy.get('#displayed-text').should('not.be.visible')
  cy.get('#show-textbox').click()
  cy.get('#displayed-text').should('be.visible')
  cy.get('[value="radio2"]').check().should('be.checked')

  });
});
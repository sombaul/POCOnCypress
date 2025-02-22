//cypress  - Spec

//Cypress Auto accepts alerts and pop ups
//Cypress have the capability to listen to browser events

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
cy.get('#alertbtn').click()
cy.get('#confirmbtn').click()

cy.on('window:alert', (str)=>
{
//Mocha
  expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

cy.on('window:confirm', (str)=>{

//Mocha
expect(str).to.equal('Hello , Are you sure you want to confirm?')
})


  });
});
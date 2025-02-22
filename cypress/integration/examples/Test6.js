//cypress  - Spec

//Cypress Auto accepts alerts and pop ups
//Cypress have the capability to listen to browser events
//Cypress has the ability to manipulate the DOM
//You can traverse to sibling with next() and it works only on get


describe('Web Tables', function(){
it('Web Tables Test Case', () => {

Cypress.on('uncaught:exception', (err, runnable) =>{
if(err.message.includes('$ is not defined')){
 return false;
}
});
    //expect(true).to.equal(false)
cy.visit("https://rahulshettyacademy.com/AutomationPractice/").then(() =>{
});

cy.get("tr td:nth-child(2)").each(($el, index, $list) => {

const text=$el.text()
 if(text.includes("Python"))
 {
 cy.get("tr td:nth-child(2)").eq(index).next().then(function(price){

    const priceText = price.text()
    expect(priceText).to.equal("25")
 })
 }


})




  });
});
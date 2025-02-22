import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'

describe('My Second Test Suite', function()
{
    before(function(){

    cy.fixture('example').then(function(data){

    this.data = data
    })

    })


    it('My FirstTest Case', function(){

    cy.visit(Cypress.env('url')+"/angularpractice/")
//    cy.get('input[name="name"]:nth-child(2)').type("Bob")

/*********************RAW SCRIPT WITHOUT USING POM MODEL********************************************************/
 /*   cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
   // cy.get('select').select("Male")
    cy.get('select').select(this.data.gender)
    cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
    cy.get('#inlineRadio3').should('be.disabled')
    cy.get(':nth-child(2) > .nav-link').click()
    */
  /*  cy.get('h4.card-title').each(($el, index, $list)=> {
     if($el.text().includes('Nokia Edge'))
     {
        cy.get('button.btn.btn-info').eq(index).click()
     }

    })
*/
/*************************************************************************************/
const homePage = new HomePage()

homePage.getNameTextBox().type(this.data.name)
homePage.getGenderDropDown().select(this.data.gender)
homePage.getTwoWayDataBindingTextBox().should('have.value', this.data.name)
homePage.getNameTextBox().should('have.attr','minlength','2')
homePage.getEntrepreneurRadioButton().should('be.disabled')
homePage.getShopButton().click()

this.data.productNames.forEach(function(element){
cy.selectProduct(element)
})

const productPage = new ProductPage()

productPage.getCheckoutButton().click()
var sum=0

cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

const amount = $el.text()
var res = amount.split(" ")
res = res[1].trim()
sum = Number(sum)+ Number(res)
}).then(function() {

cy.log(sum)
})
cy.get("h3 strong").then(function(element)
{
    const amount = element.text()
    var res = amount.split(" ")
    var total = res[1].trim()
    expect(Number(total)).to.equal(sum)
})

productPage.getCheckoutButton().click()
productPage.getCountry().type(this.data.country)
//Cypress.config('defaultCommandTimeout',10000)
productPage.getSuggestion().click()
productPage.getTermsAndConditionsCheckBox().click({force: true})
productPage.getPurchaseButton().click()
//productPage.getSuccessMessage().should('have.text',"Success! Thank you! Your order will be delivered in next few weeks :-).")
productPage.getSuccessMessage().then(function(element){
const actualText = element.text()
expect(actualText.includes("ggggSuccess")).to.be.true


})








    })





}





)
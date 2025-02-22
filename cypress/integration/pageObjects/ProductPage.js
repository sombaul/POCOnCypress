class ProductPage {

getCheckoutButton()
{
  return cy.contains('Checkout')
}

getCountry()
{
  return cy.get('#country')
}

getTermsAndConditionsCheckBox()
{
  return cy.get("#checkbox2")
}
getPurchaseButton()
{
  return cy.get('input[value="Purchase"]')
}

getSuccessMessage()
{
  return cy.get('.alert.alert-success.alert-dismissible')
}

getSuggestion()
{
  return cy.get('.suggestions > ul > li > a')
}

//#country
//#checkbox2
//input[value='Purchase']
//.alert.alert-success.alert-dismissible
//Success! Thank you! Your order will be delivered in next few weeks :-).


}

export default ProductPage;
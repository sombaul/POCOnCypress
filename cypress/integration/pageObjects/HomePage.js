class HomePage {


getNameTextBox()
{
  return cy.get('input[name="name"]:nth-child(2)')
}

getGenderDropDown()
{
  return cy.get('select')
}

getTwoWayDataBindingTextBox()
{
   return cy.get(':nth-child(4) > .ng-untouched')
}

getEntrepreneurRadioButton()
{
    return cy.get('#inlineRadio3')
}

getShopButton()
{
  return cy.get(':nth-child(2) > .nav-link')
}




}

export default HomePage;
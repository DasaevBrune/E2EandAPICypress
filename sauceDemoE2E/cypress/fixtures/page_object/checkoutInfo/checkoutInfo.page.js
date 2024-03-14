class CheckoutInfoPage{
    get checkoutbutton() {return cy.get('#checkout')}
    get inputFirstName() {return cy.get('#first-name')}
    get inputLastName() {return cy.get('#last-name')}
    get inputZipCode() {return cy.get('#postal-code')}
    get continueButton() {return cy.get('#continue')}
  

    fillCheckoutInfo(firstName,lastName,zipCode) {
        this.inputFirstName.type(firstName);
        this.inputLastName.type(lastName);
        this.inputZipCode.type(zipCode);
      }
}

export default new CheckoutInfoPage();

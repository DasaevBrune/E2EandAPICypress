class CheckoutCompletePage{
    get checkoutCompleTilte() {return cy.get('.title')}
    get checkoutCompleteTitle() {return cy.get('.complete-header'); }
    get checkoutCompleteText() {return cy.get('.complete-text');}
}

export default new CheckoutCompletePage();
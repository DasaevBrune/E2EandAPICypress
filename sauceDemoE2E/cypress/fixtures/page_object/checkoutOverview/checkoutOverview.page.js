class CheckoutOverviewPage {
    get overviewTitle() { return cy.get('span.title') }
    get product1Quantity() { return cy.get('.cart_quantity').eq(0) }
    get product1Name() { return cy.get('.inventory_item_name').eq(0) }
    get product2Quantity() { return cy.get('.cart_quantity').eq(1) }
    get product2Name() { return cy.get('.inventory_item_name').eq(1) }
    get totalPrice() { return cy.get('.summary_subtotal_label') }
    get paymentInfo() { return cy.contains('.summary_info_label', 'Payment Information') }
    get shippingInfo() { return cy.contains('.summary_info_label', 'Shipping Information') }
    get totalLabel() { return cy.contains('.summary_info_label', 'Total') }
    get total() { return cy.get('.summary_total_label') }
    get finishButton() {return cy.get('#finish')}
}

export default new CheckoutOverviewPage();

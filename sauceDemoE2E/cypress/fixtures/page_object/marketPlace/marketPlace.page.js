class MarketPlacePage{
    get appLogo() {return cy.get('.app_logo').should('exist')}
    get hamburgerMenu() {return cy.get('span.title')}
    get shoppingCart() {return cy.get('.shopping_cart_link')}
    get sortIcon() {return cy.get('select.product_sort_container')}
    get productTitle() {return cy.get('span.title')}
    get barsideMenu() {return cy.get('.bm-menu')}
    get productBagpack() {return cy.get('button#add-to-cart-sauce-labs-bike-light')}
    get productBike() {return cy.get('button#add-to-cart-sauce-labs-backpack')}
    get quantityProducts() {return cy.get('.shopping_cart_badge')}
    get bagPackAdded() {return cy.get('button#remove-sauce-labs-backpack')}
    get bikeAdded() {return cy.get('button#remove-sauce-labs-bike-light')}

    addProductsToCart() {
        this.productBagpack.click();
        this.productBike.click();
      }
}

export default new MarketPlacePage();
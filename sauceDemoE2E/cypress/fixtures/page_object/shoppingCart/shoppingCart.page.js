class ShoppingCartPage{
    
    get cartTitle() {return cy.get('span.title')}
    get quantityProducts() {return cy.get('div.cart_item .cart_quantity')}
    get bikeProductTitle() {return cy.get('div.cart_item .inventory_item_name').eq(0)}
    get bagPackProductTitle() {return cy.get('div.cart_item .inventory_item_name').eq(1)}
    get bikeProductDesc(){return cy.get('div.cart_item .inventory_item_desc').eq(0)}
    get bagPackProductDesc(){return cy.get('div.cart_item .inventory_item_desc').eq(1)}
    
}

export default new ShoppingCartPage();







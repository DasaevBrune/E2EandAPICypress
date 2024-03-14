import LoginPage from "../../fixtures/page_object/login/login.page";
import MarketPlacePage from "../../fixtures/page_object/marketPlace/marketPlace.page";
import ShoppingCartPage from "../../fixtures/page_object/shoppingCart/shoppingCart.page";

describe("Suace Demo E2E", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("/", {
      failOnStatusCode: false,
      headers: {
        Accept: "application/json, text/plain, */*", 
        "User-Agent": "axios/0.18.0", 
      },
    });
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.fixture('userCredential').then((userCredential) => {
        LoginPage.login(userCredential.userName, userCredential.password);
      })
  });

  it("Add two products to the shopping cart", () => {
   
      MarketPlacePage.addProductsToCart();    

      MarketPlacePage.bagPackAdded.should('have.text', 'Remove');
      MarketPlacePage.bikeAdded.should('have.text', 'Remove');
      MarketPlacePage.quantityProducts.should('have.text', '2');
  });

  it.only("Visualize Shopping Cart", () => {
    MarketPlacePage.addProductsToCart();  
    MarketPlacePage.shoppingCart.click();
    ShoppingCartPage.cartTitle.should('have.text', 'Your Cart');
    ShoppingCartPage.quantityProducts.should('have.length', 2);
    ShoppingCartPage.bikeProductTitle.should('have.text', 'Sauce Labs Bike Light');
    ShoppingCartPage.bagPackProductTitle.should('have.text', 'Sauce Labs Backpack');
    ShoppingCartPage.bikeProductDesc.should('contain', 'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night.');
    ShoppingCartPage.bagPackProductDesc.should('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack');

  });

});
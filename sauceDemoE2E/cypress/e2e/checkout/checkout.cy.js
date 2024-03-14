import LoginPage from "../../fixtures/page_object/login/login.page";
import MarketPlacePage from "../../fixtures/page_object/marketPlace/marketPlace.page";
import CheckoutInfoPage from "../../fixtures/page_object/checkoutInfo/checkoutInfo.page";
import CheckoutOverviewPage from "../../fixtures/page_object/checkoutOverview/checkoutOverview.page";
import CheckoutCompletePage from "../../fixtures/page_object/checkoutComplete/checkoutComplete.page";

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
    cy.fixture("userCredential").then((userCredential) => {
      LoginPage.login(userCredential.userName, userCredential.password);
    });
  });

  it("Complete the purchase E2E", () => {
    
    MarketPlacePage.addProductsToCart();
    MarketPlacePage.shoppingCart.click();

    CheckoutInfoPage.checkoutbutton.click();
    cy.fixture('userCredential').then((userCredential) => {
        CheckoutInfoPage.fillCheckoutInfo(userCredential.firstName, userCredential.lastName, userCredential.zipCode);
      });
    CheckoutInfoPage.continueButton.click(); 

    CheckoutOverviewPage.overviewTitle.should('have.text', 'Checkout: Overview');
    CheckoutOverviewPage.product1Quantity.should('have.text', '1');
    CheckoutOverviewPage.product1Name.should('have.text', 'Sauce Labs Bike Light');
    CheckoutOverviewPage.product2Quantity.should('have.text', '1');
    CheckoutOverviewPage.product2Name.should('have.text', 'Sauce Labs Backpack');
    CheckoutOverviewPage.totalPrice.should('have.text', 'Item total: $39.98');
    CheckoutOverviewPage.paymentInfo.should('exist');
    CheckoutOverviewPage.shippingInfo.should('exist');
    CheckoutOverviewPage.totalLabel.should('have.text', 'Price Total');
    CheckoutOverviewPage.total.should('have.text', 'Total: $43.18');
    CheckoutOverviewPage.finishButton.click()
    
    CheckoutCompletePage.checkoutCompleTilte.should('exist');
    CheckoutCompletePage.checkoutCompleteTitle.should('exist').and('have.text', 'Thank you for your order!');
    CheckoutCompletePage.checkoutCompleteText.should('exist').and('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');

  });
});

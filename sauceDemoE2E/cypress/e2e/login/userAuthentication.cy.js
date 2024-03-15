import LoginPage from "../../fixtures/page_object/login/login.page";
import MarketPlacePage from "../../fixtures/page_object/marketPlace/marketPlace.page";

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
  });

  it("Make Login", () => {
    cy.fixture('userCredential').then((userCredential) => {
      LoginPage.login(userCredential.userName, userCredential.password);
    });

    MarketPlacePage.hamburgerMenu.should('exist');
    MarketPlacePage.productTitle.should('have.text','Products');
    MarketPlacePage.shoppingCart.should('exist');
    MarketPlacePage.sortIcon.should('exist');
    MarketPlacePage.hamburgerMenu.click();
    MarketPlacePage.barsideMenu.should('exist');

  });
});

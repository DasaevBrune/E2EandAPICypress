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



  it.only("Add two products to the shopping cart", () => {

    
    // cy.get(".todo-list li")
    //   .should("have.length", 3)
    //   .last()
    //   .should("have.text", newItem);
  });

  it("can check off an item as completed", () => {
    // In addition to using the `get` command to get an element by selector,
    // we can also use the `contains` command to get an element by its contents.
    // However, this will yield the <label>, which is lowest-level element that contains the text.
    // In order to check the item, we'll find the <input> element for this <label>
    // by traversing up the dom to the parent element. From there, we can `find`
    // the child checkbox <input> element and use the `check` command to check it.
    cy.contains("Pay electric bill")
      .parent()
      .find("input[type=checkbox]")
      .check();

    // Now that we've checked the button, we can go ahead and make sure
    // that the list element is now marked as completed.
    // Again we'll use `contains` to find the <label> element and then use the `parents` command
    // to traverse multiple levels up the dom until we find the corresponding <li> element.
    // Once we get that element, we can assert that it has the completed class.
    cy.contains("Pay electric bill")
      .parents("li")
      .should("have.class", "completed");
  });

  context("with a checked task", () => {
    beforeEach(() => {
      // We'll take the command we used above to check off an element
      // Since we want to perform multiple tests that start with checking
      // one element, we put it in the beforeEach hook
      // so that it runs at the start of every test.
      cy.contains("Pay electric bill")
        .parent()
        .find("input[type=checkbox]")
        .check();
    });

    it("can filter for uncompleted tasks", () => {
      // We'll click on the "active" button in order to
      // display only incomplete items
      cy.contains("Active").click();

      // After filtering, we can assert that there is only the one
      // incomplete item in the list.
      cy.get(".todo-list li")
        .should("have.length", 1)
        .first()
        .should("have.text", "Walk the dog");

      // For good measure, let's also assert that the task we checked off
      // does not exist on the page.
      cy.contains("Pay electric bill").should("not.exist");
    });

    it("can filter for completed tasks", () => {
      // We can perform similar steps as the test above to ensure
      // that only completed tasks are shown
      cy.contains("Completed").click();

      cy.get(".todo-list li")
        .should("have.length", 1)
        .first()
        .should("have.text", "Pay electric bill");

      cy.contains("Walk the dog").should("not.exist");
    });

    it("can delete all completed tasks", () => {
      // First, let's click the "Clear completed" button
      // `contains` is actually serving two purposes here.
      // First, it's ensuring that the button exists within the dom.
      // This button only appears when at least one task is checked
      // so this command is implicitly verifying that it does exist.
      // Second, it selects the button so we can click it.
      cy.contains("Clear completed").click();

      // Then we can make sure that there is only one element
      // in the list and our element does not exist
      cy.get(".todo-list li")
        .should("have.length", 1)
        .should("not.have.text", "Pay electric bill");

      // Finally, make sure that the clear button no longer exists.
      cy.contains("Clear completed").should("not.exist");
    });
  });
});

# DevsuE2Eds

API Tests
These tests are designed to test the User API. They are used to verify functionality related to creating, searching, updating, and deleting users.

Setup
Make sure you have a valid API URL configured in apiConfig.js.

Prerequisites
The API is expected to support CRUD operations for users and requires authentication using an access token.

Running the Tests
To run the tests:

1. Make sure you have Cypress installed and configured correctly.
2. Run Cypress with the command npm run cypress:open.
3. Select the userAPITest.cy.js test file in the Cypress interface.

Test Descriptions

1. Create a new user: This test creates a new user using random data and verifies that the operation is successful.
2. Get user by username: This test searches for a user by their username and verifies that the operation is successful.
3. Create, Search, Update: This test performs a sequence of operations: it creates a new user, searches for that user, updates them with random data, and verifies that the update is successful.
4. Delete user: This test creates a new user, deletes them, and verifies that the operation is successful.

E2E Tests
These tests are designed to test the user flow in the SauceDemo application.

Project Structure
The project follows a page object structure to organize UI elements and test scripts.

Prerequisites
The SauceDemo application is expected to be available and accessible for testing. Additionally, UI elements are expected to be properly identified with unique selectors.

Running the Tests

To run the tests:

1. Make sure you have Cypress installed and configured correctly.
2. Run Cypress with the command npm run cypress:open.
3. Select the desired test file in the Cypress interface.

Test Descriptions

1. checkout.cy.js: This test verifies the complete checkout flow, from product selection to payment completion.

2. userAuthentication.cy.js: This test verifies the user authentication process.

3. shoppingCart.cy.js: This test verifies operations related to the shopping cart, such as adding and removing products.

4. page_object: This directory contains page object files that define the structure and behavior of different application pages.

Feel free to add comments and improvements



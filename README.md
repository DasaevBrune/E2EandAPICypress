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

Feel free to add comments and improvements.

Conclusions:

API Tests
The API tests ensure that CRUD operations for users are functioning correctly.
By using Cypress, we can easily automate these tests and verify the API endpoints' responses.
Running these tests regularly can help ensure that the API remains stable and continues to meet the requirements.
E2E Tests

Writing E2E tests for the SauceDemo application presented some initial challenges, particularly regarding handling the 401 error that occurred even after successful login.
Despite encountering difficulties, we persisted and sought solutions from various sources, including Stack Overflow and GitHub issues related to Cypress.
Ultimately, we were able to resolve the issue by configuring Cypress to handle the error and adjusting the request headers.
These tests provide comprehensive coverage of the user flow within the SauceDemo application, helping to ensure its functionality and usability.
Source: https://stackoverflow.com/questions/50935402/401 
        https://github.com/cypress-io/cypress/issues/21213
        

Overall
The combination of API and E2E tests provides thorough validation of both the backend API and the frontend user experience.
Regularly running these tests as part of the CI/CD pipeline can help catch regressions early and maintain the quality of the application.
Continuous improvement in test automation practices, along with proactive troubleshooting of issues, ensures the reliability and robustness of the testing suite.







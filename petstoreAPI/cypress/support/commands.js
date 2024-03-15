// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { apiUrl,loginData } from "./apiConfig";

Cypress.Commands.add("login", () => {
  cy.request({
    method: 'GET',
    url: `${apiUrl}/user/login`,
    qs: loginData
  }).then((response) => {
    Cypress.env('authToken', response.body.message);
  });
});

Cypress.Commands.add("createUser", (userData) => {
  cy.request({
    method: 'POST',
    url: `${apiUrl}/user`,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cypress.env('authToken')}`
    },
    body: userData
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('code', 200);
  });
});

Cypress.Commands.add("getUserByUsername", (username) => {
  cy.request({
    method: 'GET',
    url: `${apiUrl}/user/${username}`,
    headers: {
      'accept': 'application/json',
      'Authorization': `Bearer ${Cypress.env('authToken')}`
    }
  });
});

Cypress.Commands.add("updateUser", (username, updatedData) => {
  cy.request({
    method: 'PUT',
    url: `${apiUrl}/user/${username}`,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cypress.env('authToken')}`
    },
    body: updatedData
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('code', 200);
  });
});

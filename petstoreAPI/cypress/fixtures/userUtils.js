import { apiUrl } from "../support/apiConfig";
import faker from 'faker';

export const createUser = () => {
  const userData = {
    id: Math.floor(Math.random() * 1000) + 1,
    username: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.phoneNumber(),
    userStatus: 0
  };

  return new Cypress.Promise((resolve, reject) => {
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
      if (response.status === 200) {
        resolve();
      } else {
        reject();
      }
    });
  });
};

export const getUserByUsername = (username) => {
  return cy.request({
    method: 'GET',
    url: `${apiUrl}/user/${username}`,
    headers: {
      'accept': 'application/json',
      'Authorization': `Bearer ${Cypress.env('authToken')}`
    }
  });
};

export const updateUser = (username, updatedData) => {
  return cy.request({
    method: 'PUT',
    url: `${apiUrl}/user/${username}`,
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cypress.env('authToken')}`
    },
    body: updatedData
  });
};

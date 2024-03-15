import { apiUrl, loginUrl, loginData } from "../../support/apiConfig";
import faker from "faker";

describe("User API Test", () => {
  let authToken;
  let username;
  let userId;

  beforeEach(() => {
    cy.request({
      method: "GET",
      url: loginUrl,
      qs: loginData,
    }).then((response) => {
      authToken = response.body.message;
    });
  });

  it("Create a new user", () => {
    cy.fixture("userDTO").then((userDTO) => {
      userId = faker.random.number(); 
      userDTO.id = userId;
      cy.request({
        method: "POST",
        url: `${apiUrl}/user`,
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: userDTO,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("code");
        expect(response.body).to.have.property("type");
        expect(response.body).to.have.property("message");
        expect(response.body.code).to.eq(200);
      });
    });
  });

  it("Get user by username", () => {
    // Generar un nombre de usuario aleatorio
    username = faker.internet.userName();

    cy.request({
      method: "POST",
      url: `${apiUrl}/user`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        id: faker.random.number(),
        username: username,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.phoneNumber(),
        userStatus: 0,
      },
    }).then((createResponse) => {
      expect(createResponse.status).to.eq(200);

      cy.request({
        method: "GET",
        url: `${apiUrl}/user/${username}`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }).then((findResponse) => {
        expect(findResponse.status).to.eq(200);
        const user = findResponse.body;

        expect(user.id).to.exist;
        expect(user.username).to.eq(username);
        expect(user.firstName).to.exist;
        expect(user.lastName).to.exist;
        expect(user.email).to.exist;
        expect(user.password).to.exist;
        expect(user.phone).to.exist;
        expect(user.userStatus).to.exist;
      });
    });
  });

  it("Create,Search, update", () => {
    username = faker.internet.userName();
    userId = faker.random.number(); 

    cy.request({
      method: "POST",
      url: `${apiUrl}/user`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: {
        id: userId,
        username: username,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.phoneNumber(),
        userStatus: 0,
      },
    }).then((createResponse) => {
      expect(createResponse.status).to.eq(200);

      cy.request({
        method: "GET",
        url: `${apiUrl}/user/${username}`,
        headers: {
          accept: "application/json",
        },
      }).then((findResponse) => {
        expect(findResponse.status).to.eq(200);

        const updatedFirstName = faker.name.firstName();
        const updatedLastName = faker.name.lastName();
        const updatedEmail = faker.internet.email();
        const updatedPassword = faker.internet.password();
        const updatedPhone = faker.phone.phoneNumber();

        cy.request({
          method: "PUT",
          url: `${apiUrl}/user/${username}`,
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: authToken,
          },
          body: {
            id: userId,
            username: username,
            firstName: updatedFirstName,
            lastName: updatedLastName,
            email: updatedEmail,
            password: updatedPassword,
            phone: updatedPhone,
            userStatus: 0,
          },
        }).then((updateResponse) => {
          expect(updateResponse.status).to.eq(200);

          cy.request({
            method: "GET",
            url: `${apiUrl}/user/${username}`,
            headers: {
              accept: "application/json",
            },
          }).then((findUpdatedResponse) => {
            expect(findUpdatedResponse.status).to.eq(200);
            const updatedUser = findUpdatedResponse.body;

            expect(updatedUser.username).to.eq(username);
            expect(updatedUser.firstName).to.eq(updatedFirstName);
            expect(updatedUser.lastName).to.eq(updatedLastName);
            expect(updatedUser.email).to.eq(updatedEmail);
            expect(updatedUser.password).to.eq(updatedPassword);
            expect(updatedUser.phone).to.eq(updatedPhone);
          });
        });
      });
    });
  });
  it("Delete user", () => {
    username = faker.internet.userName();
    cy.request({
      method: "POST",
      url: `${apiUrl}/user`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: {
        id: faker.random.number(),
        username: username,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.phoneNumber(),
        userStatus: 0,
      },
    }).then((createResponse) => {
      expect(createResponse.status).to.eq(200);

      cy.request({
        method: "DELETE",
        url: `${apiUrl}/user/${username}`,
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200);
        expect(deleteResponse.body).to.have.property("code", 200);
        expect(deleteResponse.body).to.have.property("message", username);
      });
    });
  });
});

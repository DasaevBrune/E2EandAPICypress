class LoginPage{
    get inputUserName() {return cy.get('input[name="user-name"]')}
    get inputPassword() {return cy.get('#password')}
    get submitButton() {return cy.get('#login-button')}

    login(userName,password){
    this.inputUserName.type(userName);
    this.inputPassword.type(password);
    this.submitButton.click(); 
    }
    
}

export default new LoginPage();
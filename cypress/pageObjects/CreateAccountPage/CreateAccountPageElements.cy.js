class CreateAccountPageElements {

    static createNewCustomerAccountTitle() {
        return cy.contains('span', 'Create New Customer Account')
    }

    static firstName() {
        return cy.get('#firstname')
    }

    static lastName() {
        return cy.get('#lastname')
    }

    static emailAddress() {
        return cy.get('#email_address')
    }

    static password() {
        return cy.get('#password')
    }

    static confirmPassword() {
        return cy.get('#password-confirmation')
    }

    static createAccountButton() {
        return cy.contains('span', 'Create an Account')
    }

    static createAccountSuccessMessage() {
        return cy.get('.message-success')
    }

}

export default CreateAccountPageElements;
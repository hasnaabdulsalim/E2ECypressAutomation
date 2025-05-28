class LoginPageElements {

    static loginEmail() {
        return cy.get('#email')
    }

    static loginPassword() {
        return cy.get('#pass')
    }

    static signInButton() {
        return cy.get('#send2')
    }

    static loggedInVerification() {
        return cy.get('.logged-in').first()
    }

}

export default LoginPageElements;
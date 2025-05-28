import HomepageElements from "./HomepageElements.cy.js";
import CreateAccountPageElements from "../CreateAccountPage/CreateAccountPageElements.cy.js";
import ProductListingPageElements from "../ProductListingPage/ProductListingPageElements.cy.js";
import ProductDescriptionPageElements from "../ProductDescriptionPage/ProductDescriptionPageElements.cy.js";
import LoginPageElements from "../LoginPage/LoginPageElements.cy.js";

class HomepageMethods {

    static registerApplication() {

        cy.fixture('TestData').then((data) => {

            // Generate a random email
            const randomStr = Math.random().toString(36).substring(2, 8); // random 6-character string
            const email = `testemail${randomStr}@test.com`;

            // Update the TestData object with the newly generated email
            const updatedData = {...data, EmailAddress: email};
            // Write the updated object back to TestData.json
            cy.writeFile('cypress/fixtures/TestData.json', updatedData)

            cy.visit(Cypress.env('url'))
            HomepageElements.createAccountLink().click()
            CreateAccountPageElements.createNewCustomerAccountTitle().should('be.visible')
            CreateAccountPageElements.firstName().type(data.FirstName)
            CreateAccountPageElements.lastName().type(data.LastName)
            CreateAccountPageElements.emailAddress().type(data.EmailAddress)
            CreateAccountPageElements.password().type(data.Password)
            CreateAccountPageElements.confirmPassword().type(data.Password)
            CreateAccountPageElements.createAccountButton().click()
            CreateAccountPageElements.createAccountSuccessMessage().should('be.visible')
        })
    }

    static logoutApplication() {
        HomepageElements.customerNameDropDown().click()
        HomepageElements.signout().click()
        HomepageElements.signoutVerificationText().should('be.visible')
        HomepageElements.signInLink().should('be.visible')
    }

    static loginApplication(email, password) {
        cy.visit(Cypress.env('url'));
        HomepageElements.signInLink().click()
        LoginPageElements.loginEmail().type(email)
        LoginPageElements.loginPassword().type(password)
        LoginPageElements.signInButton().click()
        LoginPageElements.loggedInVerification().should('exist')
    }

    static loadPlpFromNavigationMenu() {
        HomepageElements.womenNavigationMenu().trigger('mouseover')
        HomepageElements.bottomsNavigationMenu().trigger('mouseover')
        HomepageElements.shortsNavigationMenu().click()
        ProductListingPageElements.plpPageTitle().should('contain.text', 'Shorts')
    }

    static searchProductLoadPdp(productName) {
        HomepageElements.searchBox().clear().type(productName + '{enter}')
        ProductListingPageElements.plpPageTitle().should('contain.text', productName)
        ProductListingPageElements.firstProductCardName().should('contain.text', productName)
        ProductListingPageElements.firstProductCardName().click()
        ProductDescriptionPageElements.pdpPageTitle().should('contain.text', productName)
    }

    static goToCart() {
        HomepageElements.showCart().click()
        HomepageElements.viewCart().click()
    }
}

export default HomepageMethods;
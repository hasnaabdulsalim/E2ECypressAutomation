import CheckoutPageElements from "./CheckoutPageElements.cy";
import OrderConfirmationPageElements from "./OrderConfirmationPageElements.cy";

class CheckoutPageMethods {

    static addShippingAddress() {

        CheckoutPageElements.shippingPageHeading().should('be.visible')
        cy.fixture('TestData').then((data) => {
            CheckoutPageElements.streetAddress().clear().type(data.StreetAddress)
            CheckoutPageElements.city().clear().type(data.City)
            CheckoutPageElements.state().select(1) // Select a state (e.g., Alabama)
            CheckoutPageElements.postalCode().clear().type(data.PostalCode)
            CheckoutPageElements.country().should('exist')
            CheckoutPageElements.phoneNumber().clear().type(data.PhoneNumber)
        })

        CheckoutPageElements.firstShippingMethod().should('exist').click()
        CheckoutPageElements.nextButton().click()
        cy.wait(2000);
    }

    static placeOrder() {
        CheckoutPageElements.paymentPageHeading().should('be.visible')
        CheckoutPageElements.placeOrderButton().should('be.visible').click()
        cy.wait(4000)
        OrderConfirmationPageElements.placeOrderSuccessMessage().should('be.visible')
    }

}

export default CheckoutPageMethods;
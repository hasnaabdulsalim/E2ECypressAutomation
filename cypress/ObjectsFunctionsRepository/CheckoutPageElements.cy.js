class CheckoutPageElements {

    static shippingPageHeading() {
        return cy.contains('div', 'Shipping Address')
    }

    static streetAddress() {
        return cy.get("input[name='street[0]']")
    }

    static city() {
        return cy.get("input[name='city']")
    }

    static state() {
        return cy.get("select[name='region_id']")
    }

    static postalCode() {
        return cy.get("[name='postcode']")
    }

    static country() {
        return cy.get("select[name='country_id']")
    }

    static phoneNumber() {
        return cy.get("input[name='telephone']")
    }

    static firstShippingMethod() {
        return cy.get(".radio").first()
    }

    static nextButton() {
        return cy.get("button.continue")
    }

    static paymentPageHeading() {
        return cy.contains('div', 'Payment Method')
    }

    static placeOrderButton() {
        return cy.get("button.checkout")
    }

}

export default CheckoutPageElements;
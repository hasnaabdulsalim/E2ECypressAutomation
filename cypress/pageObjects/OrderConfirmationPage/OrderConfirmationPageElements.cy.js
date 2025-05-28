class OrderConfirmationPageElements {

    static placeOrderSuccessMessage() {
        return cy.contains('span', 'Thank you for your purchase!')
    }

    static orderNumber() {
        return cy.get(".order-number")
    }
}

export default OrderConfirmationPageElements;
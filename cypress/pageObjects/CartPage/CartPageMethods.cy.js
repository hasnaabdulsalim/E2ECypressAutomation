import CartPageElements from "./CartPageElements.cy";

class CartPageMethods {

    static validateCart() {

        CartPageElements.cartPageHeading().should('be.visible')

        // Checking if productTotal not exceeding amount 500
        let productTotal = 0;
        CartPageElements.eachProductTotalPrice()
            .each($el => {
                const productAmount = Number($el.text().split("$")[1].trim())
                productTotal = productTotal + productAmount
            }).then(function () {
            expect(productTotal).to.be.lessThan(500)
        })

        cy.wait(2000)
        // Checking if productTotal and orderTotal are equal
        let orderTotal = 0;
        CartPageElements.displayedOrderTotal()
            .then(text => {
                orderTotal = Number(text.text().split("$")[1].trim())
            }).then(function () {
            expect(productTotal).to.be.eql(orderTotal)
        })

    }

    static checkoutFromCart() {
        CartPageElements.checkoutButton().click()
        cy.wait(4000)
    }

}

export default CartPageMethods;
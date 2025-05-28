class CartPageElements {

    static cartPageHeading() {
        return cy.contains('span', 'Shopping Cart')
    }

    static eachProductTotalPrice() {
        return cy.get('.subtotal .cart-price')
    }

    static displayedOrderTotal() {
        return cy.get('.grand.totals .price')
    }

    static checkoutButton() {
        return cy.contains('span', 'Proceed to Checkout')
    }

}

export default CartPageElements;
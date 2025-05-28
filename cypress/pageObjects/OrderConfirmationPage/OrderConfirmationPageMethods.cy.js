import OrderConfirmationPageElements from "./OrderConfirmationPageElements.cy";
import OrderDetailsPageElements from "../OrderDetailsPage/OrderDetailsPageElements.cy";

class OrderConfirmationPageMethods{

    static  loadOrderDetailsPage() {
        OrderConfirmationPageElements.placeOrderSuccessMessage().should('be.visible')
        let orderNumber = ''
        OrderConfirmationPageElements.orderNumber().should('exist')
            .then(($value) => {
                orderNumber = $value.text()
                cy.log('Order number is ' + orderNumber)
            }).then(function () {
            OrderConfirmationPageElements.orderNumber().click()
        })
        OrderDetailsPageElements.itemsOrderedTitle().should('exist')
    }

}

export default OrderConfirmationPageMethods;
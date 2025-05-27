import HomepageMethods from "../ObjectsFunctionsRepository/HomepageMethods.cy";
import ProductListingPageMethods from "../ObjectsFunctionsRepository/ProductListingPageMethods.cy";
import ProductDescriptionPageMethods from "../ObjectsFunctionsRepository/ProductDescriptionPageMethods.cy";
import CartPageMethods from "../ObjectsFunctionsRepository/CartPageMethods.cy";
import CheckoutPageMethods from "../ObjectsFunctionsRepository/CheckoutPageMethods.cy";
import OrderConfirmationPageMethods from "../ObjectsFunctionsRepository/OrderConfirmationPageMethods.cy";

describe('End to End flow of Magento Ecommerce Site', () => {

    let userdata
    before(function () {
        cy.fixture('TestData').then(function (data) {
            userdata = data
        })
    })

    it('EcommerceE2EFlow', () => {

        // Registering to application
        HomepageMethods.registerApplication()
        // Logging out from application
        HomepageMethods.logoutApplication()
        // Logging in using the registered email and password
        HomepageMethods.loginApplication(userdata.EmailAddress, userdata.Password)

        // Go to a PLP page from Navigation Menu
        HomepageMethods.loadPlpFromNavigationMenu()
        // Add product to cart from PLP
        ProductListingPageMethods.addProductToCartFromPlp()

        // Product search and load its pdp
        HomepageMethods.searchProductLoadPdp(userdata.ProductName)
        // Add product to cart from PDP
        ProductDescriptionPageMethods.addProductToCartFromPdp(userdata.ProductName)

        // Go to the cart page
        HomepageMethods.goToCart()
        // Validate the cart with product totals and total amount exceed limit
        CartPageMethods.validateCart()
        // Proceed to checkout from the cart
        CartPageMethods.checkoutFromCart()

        // Add shipping address during checkout
        CheckoutPageMethods.addShippingAddress()
        // Place order
        CheckoutPageMethods.placeOrder()
        // Go to order details page
        OrderConfirmationPageMethods.loadOrderDetailsPage()

    })
})
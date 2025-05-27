import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import HomepageMethods from "../../ObjectsFunctionsRepository/HomepageMethods.cy";
import ProductListingPageMethods from "../../ObjectsFunctionsRepository/ProductListingPageMethods.cy";
import ProductDescriptionPageMethods from "../../ObjectsFunctionsRepository/ProductDescriptionPageMethods.cy";
import CartPageMethods from "../../ObjectsFunctionsRepository/CartPageMethods.cy";
import CheckoutPageMethods from "../../ObjectsFunctionsRepository/CheckoutPageMethods.cy";
import OrderConfirmationPageMethods from "../../ObjectsFunctionsRepository/OrderConfirmationPageMethods.cy";

let userdata
before(function () {
    cy.fixture('TestData').then(function (data) {
        userdata = data
    })
})

Given('I registered and logged into the application', () => {
    // Registering to application
    HomepageMethods.registerApplication()
    // Logging out from application
    HomepageMethods.logoutApplication()
    // Logging in using the registered email and password
    HomepageMethods.loginApplication(userdata.EmailAddress, userdata.Password)
})

Given('I logged into the application portal', function(dataTable)  {
    // Logging in using the registered email and password
    HomepageMethods.loginApplication(dataTable.rawTable[1][0], dataTable.rawTable[1][1])
})

When('I add product to cart from PLP', () => {
    // Go to a PLP page from Navigation Menu
    HomepageMethods.loadPlpFromNavigationMenu()
    // Add product to cart from PLP
    ProductListingPageMethods.addProductToCartFromPlp()
})

When('I add product to cart from PDP', () => {
    // Product search and load its pdp
    HomepageMethods.searchProductLoadPdp(userdata.ProductName)
    // Add product to cart from PDP
    ProductDescriptionPageMethods.addProductToCartFromPdp(userdata.ProductName)
})

When('I validate cart and checkout from cart', () => {
    // Go to the cart page
    HomepageMethods.goToCart()
    // Validate the cart with product totals and total amount exceed limit
    CartPageMethods.validateCart()
    // Proceed to checkout from the cart
    CartPageMethods.checkoutFromCart()
})

When('I add shipping address', () => {
    // Add shipping address during checkout
    CheckoutPageMethods.addShippingAddress()
})

When('I place order', () => {
    // Place order
    CheckoutPageMethods.placeOrder()
})

Then('Order should be placed successfully and Order details page loaded upon clicking order number', () => {
    // Go to order details page
    OrderConfirmationPageMethods.loadOrderDetailsPage()
})
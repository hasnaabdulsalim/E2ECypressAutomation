import ProductDescriptionPageElements from "./ProductDescriptionPageElements.cy";

class ProductDescriptionPageMethods {

    static addProductToCartFromPdp(productName) {
        ProductDescriptionPageElements.pdpPageTitle().should('contain.text', productName)
        ProductDescriptionPageElements.productFirstSize().click() // selecting size of product
        ProductDescriptionPageElements.productFirstColor().click() // selecting color of product
        ProductDescriptionPageElements.addToCartButton().click()
        ProductDescriptionPageElements.productAddSuccessMessage().should('be.visible')
    }

}

export default ProductDescriptionPageMethods;
import ProductListingPageElements from "./ProductListingPageElements.cy";

class ProductListingPageMethods {

    static addProductToCartFromPlp() {
        ProductListingPageElements.firstProductFirstSize().click() // selecting size of product
        ProductListingPageElements.firstProductFirstColor().click() // selecting color of product
        ProductListingPageElements.addToCartButton().click({force: true})
    }

}

export default ProductListingPageMethods;
class ProductListingPageElements {

    static plpPageTitle() {
        return cy.get('.page-title .base')
    }

    static firstProductCardName() {
        return cy.get('.product-item-link').first()
    }

    static firstProductFirstSize() {
        return cy.get('.swatch-option.text').first()
    }

    static firstProductFirstColor() {
        return cy.get('.swatch-option.color').first()
    }

    static addToCartButton() {
        return cy.get('.action.tocart.primary').first()
    }

}

export default ProductListingPageElements;
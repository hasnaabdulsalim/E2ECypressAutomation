class ProductDescriptionPageElements {

    static pdpPageTitle() {
        return cy.get('.product-info-main .base')
    }

    static productFirstSize() {
        return cy.get('.swatch-option.text').first()
    }

    static productFirstColor() {
        return cy.get('.swatch-option.color').first()
    }

    static addToCartButton() {
        return cy.get('#product-addtocart-button')
    }

    static productAddSuccessMessage() {
        return cy.get('.message-success')
    }

}

export default ProductDescriptionPageElements;
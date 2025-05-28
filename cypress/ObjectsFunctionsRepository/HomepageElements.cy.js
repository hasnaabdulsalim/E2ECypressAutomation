class HomepageElements {

    static createAccountLink() {
        return cy.contains('a', 'Create an Account')
    }

    static customerNameDropDown() {
        return cy.get("button[data-action='customer-menu-toggle']").first()
    }

    static signout() {
        return cy.contains('a', 'Sign Out')
    }

    static signoutVerificationText() {
        return cy.contains('span', 'You are signed out')
    }

    static signInLink() {
        return cy.contains('a', 'Sign In')
    }

    static womenNavigationMenu() {
        return cy.contains('span', 'Women')
    }

    static bottomsNavigationMenu() {
        return cy.contains('span', 'Bottoms')
    }

    static shortsNavigationMenu() {
        return cy.contains('span', 'Shorts')
    }

    static searchBox() {
        return cy.get('#search')
    }

    static showCart() {
        return cy.get('.showcart')
    }

    static viewCart() {
        return cy.get('.viewcart')
    }

}

export default HomepageElements;
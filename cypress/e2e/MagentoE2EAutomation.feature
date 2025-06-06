Feature: End to End flow of Magento Ecommerce Site

  @Regression
  Scenario: EcommerceE2EFlow
    Given I registered and logged into the application
    When I add product to cart from PLP
    And I add product to cart from PDP
    And I validate cart and checkout from cart
    And I add shipping address
    And I place order
    Then Order should be placed successfully and Order details page loaded upon clicking order number
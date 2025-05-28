
# E2E Cypress Automation Framework

This project is a Cypress-based end-to-end (E2E) automation framework designed to test the core functionalities of an eCommerce test application. It follows the **Page Object Model (POM)** design pattern for better maintainability and scalability. It also leverages **Cucumber BDD** for behavior-driven testing, is **integrated with Jenkins** for continuous integration and execution in a CI/CD pipeline, and is **connected to Cypress Cloud** for enhanced visibility and reporting of test runs.

---

## 📁 Folder Structure

```
E2ECypressAutomation/
├── cypress/
│   ├── e2e/                              # Test specifications
│   │   ├── MagentoE2EAutomation.cy.js
│   │   ├── MagentoE2EAutomation.feature
│   │   └── ...
│   ├── fixtures/                         # Test data in JSON format
│   │   └── TestData.json
│   ├── ObjectsFunctionsRepository/       # Page Object classes
│   │   ├── HomepageElements.cy.js
│   │   ├── HomepageMethods.cy.js
│   │   └── ...
│   └── support/
│       ├── commands.js                   # Custom Cypress commands
│       └── e2e.js                        # Global hooks and configurations
├── cypress.config.js                     # Cypress configuration file
├── package.json                          # Project dependencies and scripts
└── README.md                             # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hasnaabdulsalim/E2ECypressAutomation.git
   cd E2ECypressAutomation
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

---

## 🧪 Running Tests

### Open Cypress Test Runner (Interactive Mode)

```bash
npx cypress open
```
This will launch the Cypress Test Runner, allowing you to run tests interactively.

### Run Tests in Headless Mode

```bash
npx cypress run
```
This will execute all tests in the terminal without the GUI.

---

## 🌐 Base URL Configuration

The base URL for the application under test is configured in `cypress.config.js`:

```javascript
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    url: 'https://magento.softwaretestingboard.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
```

---

## 🧩 Page Object Model (POM)

The framework utilizes the Page Object Model to encapsulate page-specific behaviors and elements.

```javascript
class HomepageMethods {
    static loginApplication(email, password) {
        cy.visit(Cypress.env('url'));
        HomepageElements.signInLink().click()
        LoginPageElements.loginEmail().type(email)
        LoginPageElements.loginPassword().type(password)
        LoginPageElements.signInButton().click()
        LoginPageElements.loggedInVerification().should('exist')
    }
}
export default HomepageMethods;
```

---

## 🧪 Sample Test Case

```javascript
import HomepageMethods from "../ObjectsFunctionsRepository/HomepageMethods.cy";

describe('Login Test', () => {
  it('should login with valid credentials', () => {
    HomepageMethods.loginApplication('testuser@example.com', 'Password123')
  });
});
```

---

## 📊 Test Reporting

### Using Mochawesome

```bash
npm i --save-dev cypress-mochawesome-reporter
```

Update `cypress.config.js`:

```javascript
reporter: 'mochawesome',
e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
},
```
---

## 🧪 Test Data Management

Using fixtures:

```json
{
  "email": "testuser@example.com",
  "password": "Password123"
}
```

Usage:

```javascript
cy.fixture('userData').then((data) => {
  cy.get('#email').type(data.email);
  cy.get('#pass').type(data.password);
});
```

---

## 🧾 Cucumber BDD Integration

The framework includes a `.feature` file written in Gherkin syntax to describe behavior-driven tests.

```gherkin
Feature: End to End flow of Magento Ecommerce Site
  Scenario: EcommerceE2EFlow
    Given I registered and logged into the application
    When I add product to cart from PLP
    And I add product to cart from PDP
    And I validate cart and checkout from cart
    And I add shipping address
    And I place order
    Then Order should be placed successfully and Order details page loaded upon clicking order number
```

---

## 🤖 Jenkins Integration

This project is integrated with **Jenkins** for Continuous Integration and test execution via build parameters.

A **choice parameter** named `CyScript` is used in the Jenkins job, allowing testers to select a specific test script to run. The choices and their corresponding commands are defined in the `package.json` file under the `scripts` section:

```json
"scripts": {
  "test": "npx cypress run",
  "headTest": "npx cypress run --headed",
  "chromeTest": "npx cypress run --browser chrome",
  "recordDashboardTest": "npx cypress run --record --key 3582b05c-6857-4da1-9d1f-247f75053ee9"
}
```

In Jenkins, the job is configured with the **build step**:

```bash
npm run %CyScript%
```

This allows dynamic selection and execution of test scripts like:

- `test` – Headless run
- `headTest` – Headed run
- `chromeTest` – Run in Chrome browser
- `recordDashboardTest` – Run with Cypress Dashboard recording

---

## ☁️ Cypress Cloud Integration

The project is connected to [Cypress Cloud](https://cloud.cypress.io) for enhanced test visibility, video recordings, and test result dashboards.

To enable it, the `projectId` is defined in `cypress.config.js`, and runs can be recorded with:

```bash
npx cypress run --record --key <your-record-key>
```

For Jenkins execution, use the predefined script:

```bash
npm run recordDashboardTest
```

Test runs can be monitored directly from the Cypress Cloud dashboard.

---

## 📬 Contact

**Hasna A**  
Quality Assurance Engineer | 5+ years of experience  
📧 Email: [hasna.cse@gmail.com]  
🔗 LinkedIn: [linkedin.com/in/hasna-abdulsalim](https://linkedin.com/in/hasna-abdulsalim)

---

## 📄 License

This project is licensed under the MIT License.

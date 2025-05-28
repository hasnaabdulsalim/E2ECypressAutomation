# E2E Cypress Automation Framework

This project is a Cypress-based end-to-end (E2E) automation framework designed to test the core functionalities of an eCommerce application. It follows the **Page Object Model (POM)** design pattern for better maintainability and scalability.

---

## 📁 Folder Structure

```
E2ECypressAutomation/
├── cypress/
│   ├── e2e/                              # Test specifications
│   │   ├── MagentoE2EAutomation.cy.js
│   │   ├── ...
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
    baseUrl: 'https://magento.softwaretestingboard.com',
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
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

Update `cypress.config.js`:

```javascript
reporter: 'mochawesome',
reporterOptions: {
  reportDir: 'cypress/reports',
  overwrite: false,
  html: false,
  json: true,
}
```

Generate HTML report:

```bash
npx mochawesome-merge cypress/reports/*.json > mochawesome.json
npx marge mochawesome.json
```

---

## 🔧 Custom Commands

```javascript
Cypress.Commands.add('login', (email, password) => {
  cy.get('#email').type(email);
  cy.get('#pass').type(password);
  cy.get('#send2').click();
});
```

---

## 🧪 Test Data Management

Using fixtures:

```json
{
  "validUser": {
    "email": "testuser@example.com",
    "password": "Password123"
  }
}
```

Usage:

```javascript
cy.fixture('userData').then((data) => {
  cy.get('#email').type(data.validUser.email);
  cy.get('#pass').type(data.validUser.password);
});
```

---

## 📬 Contact

**Hasna Abdulsalim**  
Quality Assurance Engineer | 5+ years of experience  
📧 Email: [hasna.cse@gmail.com]  
🔗 LinkedIn: [linkedin.com/in/hasna-abdulsalim](https://linkedin.com/in/hasna-abdulsalim)

---

## 📄 License

This project is licensed under the MIT License.

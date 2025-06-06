// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';

Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('AddFotoramaVideoEvents is not a function')) {
        // returning false here prevents Cypress from failing the test
        return false;
    }

    // Ignore cross-origin script errors like "Script error"
    if (err.message.includes('Script error')) {
        return false;
    }

    // For other errors, don't ignore
    return true;
});
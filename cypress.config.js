const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config){
  // implement node event listeners here
  require('cypress-mochawesome-reporter/plugin')(on);
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
      "file:preprocessor",
      browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;

}
module.exports = defineConfig({
  projectId: "umd2dk",
  retries: {
    runMode: 1
  },
  env: {
    url: 'https://magento.softwaretestingboard.com'
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents,
    specPattern: "**/*.feature",
  },
});

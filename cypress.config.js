const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8ourd9',
  defaultCommandTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  env: {
  url:'https://google.com'
  },
  retries: {
  runMode: 1
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js'
    //screenshotsFolder: 'cypress/screenshots'
  },
});

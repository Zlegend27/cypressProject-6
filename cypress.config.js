const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    e2e: {
      viewportHeight: 1080,
      viewportWidth: 1980,
      chromeWebSecurity: false,
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  });

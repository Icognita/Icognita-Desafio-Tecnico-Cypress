const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    viewportHeight: 1280,
    viewportWidth: 1280,
    watchForFileChanges: false,

    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://demoqa.com/webtables',

    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on('file:preprocessor', cucumber());

      
    },
  },
});

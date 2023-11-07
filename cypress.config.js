const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://front.serverest.dev/',
    env: {
      API_URL: 'https://serverest.dev',
      hideCredentials: true,
      requestMode: true
    }
  },
  fixturesFolder: false,
  video: false
});

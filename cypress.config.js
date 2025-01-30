const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "sxkhe3",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Habilitando a gravação dos testes
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    }
  },
});

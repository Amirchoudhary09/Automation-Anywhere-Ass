/**
 * Author: Amir choudhary
 * Project: Automation Anywhere SDET Assignment
 * GitHub: https://github.com/Amirchoudhary09/Automation-Anywhere-Ass
 * Copyright (c) 2026. All rights reserved.
 */

require('dotenv').config(); 
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 90000,
    baseUrl: process.env.CYPRESS_BASE_URL,
    specPattern: "cypress/e2e/**/*.cy.js",
    watchForFileChanges: false,
    env: {
      username: process.env.CYPRESS_USERNAME,
      password: process.env.CYPRESS_PASSWORD,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
});

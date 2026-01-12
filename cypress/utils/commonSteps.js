/**
 * Author: Amir choudhary
 * Project: Automation Anywhere SDET Assignment
 * GitHub: https://github.com/Amirchoudhary09/Automation-Anywhere-Assi
 * Copyright (c) 2026. All rights reserved.
 */



import LoginPage from '../pages/loginPage';
import testData from '../fixtures/textData.json';

export function login() {
  LoginPage.visit();
  LoginPage.enterUsername(testData.username);
  LoginPage.enterPassword(testData.password);
  LoginPage.submit();
  cy.url().should("include", "/dashboard");
}

export function logout() {
  cy.get("#userProfileIcon").click();
  cy.get("#logoutBtn").click();
  cy.url().should("include", "/login");
}




// Cypress.Commands.add("login", () => {
//   LoginPage.visit()
//     .typeUsername(testData.username)
//     .typePassword(testData.password)
//     .toggleRememberMe()
//     .clickLogin();
// });

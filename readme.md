# 🧪 Automation Anywhere – SDET Assignment (Cypress POM Framework)

This repository contains the completed assignment for the SDET role at **Automation Anywhere**.  
The project demonstrates a **Cypress-based POM framework** with reusable components, assertions, and Mocha reporting for the following use cases:

---

## 📌 Use Cases

✅ Use Case 1: Message Box Task Bot (UI Automation)
Goal: Automate the end-to-end creation and configuration of a Task Bot.

Workflow: Login ➡️ Navigation to Automation ➡️ Task Bot Creation ➡️ Message Box Action Configuration ➡️ Save.

Technical Highlights: * Implements Page Object Model (POM) for clean element selectors and actions.

Validates UI element visibility and proper data entry via assertions.

Assertions: Verified successful bot creation, confirmation messages, and full functional flow.

✅ Use Case 2: Form with Upload Flow (UI Automation)
Goal: Automate form building with drag-and-drop elements and file upload.

Workflow: Form Creation ➡️ Canvas Interaction (Drag & Drop Textbox & File Upload) ➡️ Right Panel UI Verification ➡️ Document Upload from Shared Folder.

Technical Highlights:

Handles complex Drag and Drop interactions on the canvas.

Automates the File Upload process using Cypress file-handling plugins.

Assertions: UI element functionality, file upload status (Success/Failure), and form submission behavior.

✅ Use Case 3: Learning Instance (API & UI Flow)
Goal: Validate Learning Instance creation under the AI tab via functional automation.

Workflow: Auth ➡️ AI Tab Navigation ➡️ Learning Instance Creation ➡️ Functional Validation.

API Validation (Technical Scope):

Identified endpoints using Browser Network Tab.

Checks: HTTP Status Codes (201 Created), Response Schema validation, and field-level accuracy (ID, Name, Status).

Ensures functional accuracy between the UI state and backend response.
---

## 🧰 Tech Stack

- ✅ Cypress (Automation)
- ✅ JavaScript
- ✅ Page Object Model (POM)
- ✅ Mocha Reporting
- ✅ `.env` for environment config
- ✅ `cypress.env.json` for test data
- ✅ Reusable utility functions (login/logout/etc.)

---

## 🚀 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/amirchoudhary09/Automation-Anywhere-Ass

# 2. Install dependencies
npm install

# 3. Run Cypress tests
npx cypress open

```
---
---
⚠️ This project is © 2026 amir choudhary. Please retain all author credits if you reuse or modify this work.

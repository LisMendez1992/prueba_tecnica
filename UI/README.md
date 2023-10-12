## About

This repository hosts a test framework for automated testing using Cypress and Cucumber.

## Prerequisites

Before running the tests, ensure that you have the following dependencies installed:

- [Node.js](https://nodejs.org/)
- Cypress: Install with `npm install cypress --save-dev`
- Cypress Cucumber Preprocessor: Install with `npm install @badeball/cypress-cucumber-preprocessor`
- Browserify: Install with `npm install @badeball/cypress-cucumber-preprocessor/browserify`

## Running the Tests Headless mode

To execute the tests in headless mode (without the Cypress UI), use the following command:

```bash
npx cypress run
```

To execute the tests with the Cypress Test Runner, run the following command:

```bash
npx cypress open
```

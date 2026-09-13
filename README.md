# 🚀 JavaScript Playwright BDD Allure Reporting Automation Framework

### Beginner-Friendly JavaScript Playwright BDD Automation Framework

Build reliable, maintainable, and reusable UI automation using **JavaScript, Playwright, BDD, Gherkin, playwright-bdd, and Allure Reporting**.

⭐ If this project helps you, please consider giving it a Star!

---

# 📖 About

This repository provides a simple and beginner-friendly **JavaScript Playwright BDD Automation Framework** built using:

- 🟨 JavaScript
- 🌐 Playwright
- 🥒 BDD / Gherkin
- 🧩 playwright-bdd
- 📊 Allure Reporting
- 🧱 Simple Page Object Model
- ⚙️ Playwright Configuration
- 📸 Screenshot on Failure
- 🎥 Video on Failure
- 🔍 Trace on Failure
- 🏷️ Tag-Based Test Execution
- 📋 Scenario Outline and Examples
- 🚀 CI/CD Friendly

The framework intentionally focuses on:

> **Simplicity → Readability → Maintainability → Reusability**

No unnecessary design patterns or complicated JavaScript concepts are used.

It is suitable for:

- Automation Engineers
- SDET Engineers
- Software Engineers
- Beginners learning JavaScript automation
- Beginners learning Playwright
- Beginners learning BDD
- Beginners migrating from TypeScript Playwright to JavaScript Playwright
- Teams building UI automation frameworks
- Enterprise UI automation projects

---

# ✨ Features

- 🟨 JavaScript
- 🌐 Playwright
- 🥒 BDD using Gherkin
- 🧩 playwright-bdd
- 📝 Feature Files
- 🧱 Simple Page Object Model
- 📊 Allure Reporting
- 📸 Automatic Screenshot on Failure
- 🎥 Video on Failure
- 🔍 Trace on Failure
- 🔄 Reusable Utility Functions
- 🎯 Tag-Based Test Execution
- 🧪 Positive and Negative Test Scenarios
- 📋 Scenario Outline and Examples
- 🌐 Chrome Browser Execution
- 🚀 CI/CD Friendly
- 🧹 Easy Maintenance
- 📁 Clean Project Structure
- 🟢 Beginner-Friendly JavaScript
- 📦 Simple npm Commands

---

# 🏗 Framework Design

The framework intentionally follows a simple and practical architecture.

It uses:

- ✅ Page Object Model
- ✅ Playwright BDD
- ✅ Gherkin language
- ✅ Step Definitions
- ✅ Reusable utility functions
- ✅ Configuration-driven execution
- ✅ Playwright test lifecycle
- ✅ Allure Reporting
- ✅ Screenshot, video, and trace diagnostics

The goal is:

> **Simple to understand → Easy to maintain → Easy to extend → Ready for CI/CD**

---

# 🥒 BDD with Gherkin

BDD allows business-readable scenarios to be written using Gherkin syntax.

Example:

```gherkin
@smoke
Scenario: User logs into the application
  Given User navigates to the login page
  When User enters valid username and password
  And User clicks the login button
  Then User should be logged in successfully
```

The execution flow is:

```text
┌──────────────────────────┐
│     Gherkin Feature      │
│          File            │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│      playwright-bdd      │
│       BDD Generator      │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│     Step Definitions     │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│       Page Objects       │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│        Playwright        │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│     Web Application      │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│     Allure Reporting     │
└──────────────────────────┘
```

---

# 🧩 Page Object Model

The framework uses a simple Page Object Model.

Each Page Object contains:

- Locators
- Page actions
- Element interactions
- Page-specific functionality
- Page-specific validations

Example:

```javascript
export class LoginPage {

    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('input[type="submit"]');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
```

The Page Object keeps Playwright implementation separate from the Gherkin step definitions.

This makes the framework easier to understand and maintain.

---

# 📊 Allure Reporting

The framework uses:

```text
allure-playwright
```

for test execution reporting.

Allure results are generated in:

```text
allure-results/
```

The HTML report is generated in:

```text
allure-report/
```

Allure can provide:

- Test execution summary
- Passed scenarios
- Failed scenarios
- Skipped scenarios
- Feature names
- Scenario names
- BDD steps
- Execution duration
- Failure information
- Screenshots
- Videos
- Playwright traces
- Test attachments

Generate the HTML report:

```bash
npm run allure:generate
```

Open the report:

```bash
npm run allure:open
```

---

# 📸 Screenshot on Failure

Playwright is configured to capture screenshots when a test fails.

Configuration:

```javascript
use: {
    screenshot: 'only-on-failure'
}
```

This makes failed UI tests easier to investigate.

---

# 🎥 Video on Failure

Video recording is enabled for failed tests:

```javascript
use: {
    video: 'retain-on-failure'
}
```

This provides a visual record of the failed test execution.

---

# 🔍 Trace on Failure

Playwright trace collection is enabled for failed tests:

```javascript
use: {
    trace: 'retain-on-failure'
}
```

The trace can be opened using Playwright's Trace Viewer for detailed debugging.

---

# 🌐 Browser Testing

The current framework is configured for:

- Google Chrome

Chrome is configured using the Playwright browser channel:

```javascript
projects: [
    {
        name: 'chrome',
        use: {
            ...devices['Desktop Chrome'],
            channel: 'chrome'
        }
    }
]
```

Run Chrome tests:

```bash
npm run test:chrome
```

---

# 🏷️ Tag-Based Test Execution

BDD tags can be used to organize and selectively execute scenarios.

Example:

```gherkin
@smoke
Scenario: Successful Login
```

Run smoke tests:

```bash
npm run test:smoke
```

Regression scenarios can be marked with:

```gherkin
@regression
Scenario: Complete Regression Scenario
```

Run regression tests:

```bash
npm run test:regression
```

Tag filtering is performed during BDD test generation.

---

# 📋 Scenario Outline / Data-Driven Testing

The framework supports Gherkin:

```text
Scenario Outline
Examples
```

Example:

```gherkin
@MultipleScenario
Scenario Outline: Validate account operation

    When User performs account operation "<Operation>"
    Then Operation should be successful

Examples:
    | Operation |
    | Create    |
    | Transfer  |
```

The same scenario can therefore execute with multiple data values.

---

# 📂 Project Structure

```text
JavaScript_Playwright_BDD_Allure_Framework/
│
├── features/
│   ├── Demo.feature
│   ├── Demo1_Parabank.feature
│   └── Demo2_Parabank.feature
│
├── steps/
│   ├── login.steps.js
│   └── parabank.steps.js
│
├── pages/
│   ├── BasePage.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── OpenAccountPage.js
│   └── RegisterPage.js
│
├── utils/
│   └── utilities.js
│
├── scripts/
│   └── clean.js
│
├── allure-results/
├── allure-report/
├── .features-gen/
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 📄 Folder Responsibilities

## `features/`

Contains Gherkin feature files.

Example:

```text
features/
├── Demo.feature
├── Demo1_Parabank.feature
└── Demo2_Parabank.feature
```

Feature files contain:

- Features
- Scenarios
- Scenario Outlines
- Tags
- Given / When / Then steps

---

## `steps/`

Contains JavaScript step definitions.

Example:

```text
steps/
├── login.steps.js
└── parabank.steps.js
```

Step definitions connect Gherkin steps to Playwright automation code.

---

## `pages/`

Contains Page Object classes.

Example:

```text
pages/
├── BasePage.js
├── HomePage.js
├── LoginPage.js
├── OpenAccountPage.js
└── RegisterPage.js
```

Page Objects contain:

- Locators
- Click actions
- Text entry
- Navigation
- Page validations

---

## `utils/`

Contains reusable JavaScript utility functions.

Example:

```text
utils/
└── utilities.js
```

Utilities can contain common functions such as:

- Random data generation
- String generation
- Date handling
- Common helper methods

---

## `scripts/`

Contains framework maintenance scripts.

Example:

```text
scripts/
└── clean.js
```

The clean script removes generated test and reporting files.

Run:

```bash
npm run clean
```

---

# 🔄 Framework Execution Flow

```text
                 ┌──────────────────────┐
                 │    Gherkin Feature   │
                 │         File         │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │    playwright-bdd    │
                 │    BDD Generator     │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │   Step Definitions   │
                 │       .js            │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │    Page Objects      │
                 │       .js            │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │      Playwright      │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │    Web Application   │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │   Allure Reporting   │
                 │ Screenshot / Video   │
                 │       / Trace        │
                 └──────────────────────┘
```

---

# 💻 Prerequisites

Install the following before running the framework:

- Node.js LTS
- npm
- Git
- Google Chrome
- VS Code or another JavaScript IDE
- Allure Commandline

Check Node.js:

```bash
node --version
```

Check npm:

```bash
npm --version
```

Check Allure:

```bash
allure --version
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/imademethink/JavaScript_Playwright_BDD_Allure_Framework.git
```

## 2. Navigate to the Project

```bash
cd JavaScript_Playwright_BDD_Allure_Framework
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Install Playwright Browsers

```bash
npx playwright install
```

For Linux CI environments:

```bash
npx playwright install --with-deps
```

---

# 🧪 Test Execution

## Run All Tests

```bash
npm test
```

This command:

1. Generates Playwright tests from the feature files.
2. Executes the generated tests.
3. Produces Allure results.

---

## Run Smoke Tests

```bash
npm run test:smoke
```

---

## Run Regression Tests

```bash
npm run test:regression
```

---

## Run Chrome Tests

```bash
npm run test:chrome
```

---

## Run Tests in Headed Mode

```bash
npm run test:headed
```

---

## Generate BDD Tests Only

```bash
npm run bddgen
```

---

# 📊 Allure Report Commands

## Generate HTML Report

```bash
npm run allure:generate
```

Equivalent command:

```bash
allure generate allure-results -o allure-report --clean
```

## Open HTML Report

```bash
npm run allure:open
```

Equivalent command:

```bash
allure open allure-report
```

---

# 📊 Typical Test and Reporting Flow

```bash
npm run test
allure generate path\to\allure-results -o allure-report --clean
allure open allure-report
```

For smoke testing:

```bash
npm run test:smoke
```

---

# 🧹 Clean Framework

Generated files can be removed using:

```bash
npm run clean
```

This helps remove previous:

- Allure results
- Allure reports
- Generated BDD files
- Playwright test artifacts

A clean execution can then be started with:

```bash
npm install
npm run test
```

---

# 🧰 Main Dependencies

The framework uses the following core packages:

| Package | Purpose |
|---|---|
| `@playwright/test` | Playwright browser automation and assertions |
| `playwright-bdd` | BDD / Gherkin integration with Playwright |
| `allure-playwright` | Allure test reporting |
| `allure` | Allure command-line reporting |

Current versions:

| Package | Version |
|---|---:|
| `@playwright/test` | `1.62.0` |
| `playwright-bdd` | `9.2.1` |
| `allure-playwright` | `3.12.1` |
| `allure` | `3.17.0` |

---

# ⚙️ Playwright Configuration

The main configuration is located in:

```text
playwright.config.js
```

Current framework settings include:

```text
Timeout       : 30 seconds
Workers       : 2
Parallel      : Disabled
Retries       : 1
Headless      : false
Browser       : Chrome
Screenshot    : Only on failure
Video         : Retain on failure
Trace         : Retain on failure
```

These values can be changed according to project requirements.

---

# 📦 NPM Scripts

The framework provides simple npm commands.

```json
"scripts": {
    "bddgen": "bddgen",
    "test": "bddgen && playwright test",
    "test:smoke": "bddgen --tags \"@smoke\" && playwright test",
    "test:regression": "bddgen --tags \"@regression\" && playwright test",
    "test:chrome": "bddgen && playwright test --project=chrome",
    "test:headed": "bddgen && playwright test --headed",
    "allure:generate": "allure generate allure-results -o allure-report --clean",
    "allure:open": "allure open allure-report",
    "clean": "node scripts/clean.js"
}
```

---

# 🧱 Simple JavaScript Architecture

The framework intentionally avoids unnecessary complexity.

There are no unnecessary:

- Complex design patterns
- Interfaces
- Abstract classes
- Dependency injection frameworks
- Advanced JavaScript abstractions
- TypeScript-specific concepts
- Complicated inheritance structures

The framework uses straightforward JavaScript classes and functions.

This makes it easier for beginners to understand.

---

# 🟨 Why JavaScript?

JavaScript provides a simple starting point for Playwright automation.

The framework demonstrates:

- JavaScript classes
- Objects
- Functions
- `async` / `await`
- Modules
- Imports and exports
- Arrays
- Strings
- Basic condition handling
- Playwright locators
- Playwright assertions

Example:

```javascript
import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        await this.page.locator('#username').fill(username);
        await this.page.locator('#password').fill(password);
        await this.page.locator('input[type="submit"]').click();
    }
}
```

The intention is to keep the JavaScript easy to read and understand.

---

# 🧹 Clean Framework Principles

## Feature Files

Contain business-readable BDD scenarios.

---

## Step Definitions

Contain the implementation of Gherkin steps.

---

## Page Objects

Contain Playwright UI interactions and page-specific behavior.

---

## Utilities

Contain reusable technical functionality.

---

## Configuration

Contains Playwright and BDD execution configuration.

---

## Reporting

Allure receives the results and execution artifacts generated by the framework.

---

This separation prevents feature files from becoming tightly coupled with Playwright implementation.

---

# 📚 Learning Outcomes

This repository demonstrates:

- JavaScript automation
- Playwright
- BDD automation
- Gherkin
- playwright-bdd
- Page Object Model
- Step Definitions
- Playwright configuration
- Chrome browser automation
- Tag-based execution
- Scenario Outline
- Data-driven testing
- Screenshot handling
- Video capture
- Trace capture
- Allure Reporting
- JavaScript modules
- JavaScript classes
- JavaScript `async` / `await`
- Maintainable automation framework design

---

# 🎓 Suitable For

This framework can be used by:

- Beginners learning JavaScript Playwright
- Beginners learning BDD
- QA Automation Engineers
- SDETs
- Software Engineers
- Test Automation Leads
- QA Managers
- Teams building BDD automation frameworks
- Teams migrating from TypeScript Playwright to JavaScript Playwright

---

# 🤝 Contributing

Contributions are welcome!

Feel free to:

- ⭐ Star the repository
- 🍴 Fork the project
- 🐞 Report issues
- 💡 Suggest improvements
- 🚀 Submit Pull Requests

---

# 🗺️ Future Roadmap

Potential future enhancements:

- API Automation
- Database Validation
- Docker Support
- Additional Browser Support
- Parallel Execution
- Advanced Retry Mechanism
- GitHub Actions Pipeline
- Jenkins Pipeline
- Azure DevOps Pipeline
- Test Data Management
- Excel-Based Test Data
- JSON-Based Test Data
- Environment Management
- Advanced Failure Diagnostics
- API + UI Combined Workflows
- CI/CD Reporting Integration
- Email Notifications
- Slack Notifications

---

# 🌟 Why This Framework?

The framework is designed around a simple philosophy:

```text
Readable BDD
     +
Simple JavaScript
     +
Simple Page Objects
     +
Reliable Playwright
     +
Useful Allure Reporting
     +
Simple Configuration
     =
Maintainable Automation
```

No unnecessary framework complexity.

No excessive design patterns.

No complicated JavaScript abstractions.

Just a clean and practical automation architecture that teams can understand, maintain, and extend.

---

# 📌 Useful Commands

| Purpose | Command |
|---|---|
| Install dependencies | `npm install` |
| Install browsers | `npx playwright install` |
| TypeScript validation | `npm run typecheck` |
| Generate BDD tests | `npm run bddgen` |
| Run all tests | `npm test` |
| Run smoke tests | `npm run test:smoke` |
| Run regression tests | `npm run test:regression` |
| Run Chrome tests | `npm run test:chrome` |
| Run headed tests | `npm run test:headed` |
| Generate Allure report | `allure generate path\to\allure-results -o allure-report --clean` |
| Open Allure report | `allure open allure-report` |

---

# ❤️ Community

If you find this framework useful:

⭐ Star the repository

🍴 Fork the project

🐞 Report issues

💡 Suggest improvements

🚀 Contribute

---

### Made with ❤️ for the Automation Testing Community

**JavaScript • Playwright • BDD • Gherkin • playwright-bdd • Allure Reporting**

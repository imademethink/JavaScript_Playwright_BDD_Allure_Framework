# 🚀 JavaScript Playwright BDD Cucumber Allure Reporting Automation Framework

### Beginner-Friendly JavaScript Playwright BDD Automation Framework

A simple and maintainable UI automation framework built with **JavaScript, Playwright, BDD/Gherkin, and Allure Reporting**.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| JavaScript | Programming language |
| Playwright | UI automation |
| playwright-bdd | BDD / Gherkin support |
| Allure Playwright | Test reporting |
| npm | Dependency management |
| Node.js | JavaScript runtime |

## 📁 Project Structure

```text
project-root/
├── features/
├── steps/
├── pages/
├── utils/
├── scripts/
├── allure-results/
├── allure-report/
├── playwright.config.js
├── package.json
└── .gitignore
```

## ⚙️ Prerequisites

- Node.js
- npm
- Google Chrome
- Allure command-line tool

## 📦 Installation

```bash
npm install
npx playwright install
```

## ▶️ Execute Tests

```bash
npm test
npm run test:smoke
npm run test:regression
npm run test:chrome
npm run test:headed
```

## 🏷️ BDD Tags

Use tags directly in `.feature` files:

```gherkin
@smoke
Scenario: Successful Login
```

Run smoke tests:

```bash
npm run test:smoke
```

Run regression tests:

```bash
npm run test:regression
```

Tag filtering is performed by `playwright-bdd` during BDD test generation.

## 📊 Allure Reporting

```bash
npm run allure:generate
npm run allure:open
```

The report includes test status, feature/scenario names, tags, duration, failure details, and configured artifacts such as screenshots, traces, and videos.

## 🧹 Clean Results

```bash
npm run clean
```

## 🖥️ Page Object Model

Page Objects are intentionally simple:

```javascript
export class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        await this.page.getByLabel('Username').fill(username);
        await this.page.getByLabel('Password').fill(password);
    }
}
```

## 🧩 BDD Step Definitions

```javascript
Given('I navigate to the login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
});
```

## 🔧 Utilities

`utils/utilities.js` provides reusable functions for waiting, screenshots, files, dates, random data, environment variables, JSON, strings, and logging.

## 🎯 Design Principles

- Beginner-friendly JavaScript
- Simple Playwright code
- Simple BDD implementation
- Minimal abstraction
- Easy debugging and maintenance
- Reusable Page Objects and utilities
- Allure reporting

## 🔄 Execution Flow

```text
Feature File
    ↓
BDD Step Definition
    ↓
Page Object
    ↓
Playwright
    ↓
Browser
    ↓
Allure Results
    ↓
Allure HTML Report
```

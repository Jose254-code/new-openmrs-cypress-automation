# OpenMRS Cypress Automation - Patient Registration

This project contains Cypress-based automated tests for the OpenMRS demo environment: [https://dev3.openmrs.org/openmrs/spa/](https://dev3.openmrs.org/openmrs/spa/)

## 🚀 Features

* Multi-step login automation
* Patient registration flow with calendar-based DOB selection
* Post-registration verification (search + patient summary)
* Logout functionality

## 🧱 Folder Structure

```
openmrs-cypress-automation/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── patientRegistration.cy.js
│   ├── pages/
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .github/
│   └── workflows/
│       └── cypress-tests.yml
├── cypress.config.js
├── package.json
├── README.md
```

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone git@github.com:your-username/openmrs-cypress-patient-registration.git
cd openmrs-cypress-patient-registration
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Open Cypress Test Runner

```bash
npx cypress open
```

### 4. Run Tests via CLI (Headless)

```bash
npx cypress run
```

## 🧪 Test Summary

| Test File                 | Description                              |
| ------------------------- | ---------------------------------------- |
| login.cy.js               | Tests login and logout functionality     |
| patientRegistration.cy.js | Registers a new patient and validates it |

## 📸 Screenshots & Reports

* Screenshots: `cypress/screenshots/`
* Videos: `cypress/videos/`
* HTML Reports: via Mochawesome (if configured)

## 📦 CI/CD

Includes optional GitHub Actions workflow at `.github/workflows/cypress-tests.yml` to run tests on every push to `main`.

## 💡 Notes

* Uses robust selectors (e.g. placeholder, visible button text)
* Patient name and date of birth are randomized to avoid duplication
* Can be extended to API layer tests or admin workflows

## 📄 License

This project is for educational and QA assessment purposes.

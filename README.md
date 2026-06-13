# Playwright API Framework

API test automation framework built with Playwright and TypeScript.

## Features

- API testing with Playwright
- TypeScript support
- API Client architecture
- Test data management
- Positive and negative test scenarios
- CRUD operations testing (GET, POST, PUT, DELETE)

## Project Structure

```text
playwright-api-framework
│
├── api-clients
│   ├── base-api.client.ts
│   └── users.client.ts
│
├── data
│   └── users.ts
│
├── tests
│   └── users.spec.ts
│
├── types
│   └── user.ts
│
└── playwright.config.ts
```

## Installation

```bash
npm install
```

## Run All Tests

```bash
npx playwright test
```

## Run Specific Test

```bash
npx playwright test -g "Should create a new user"
```

## Implemented Test Scenarios

### GET

- Get user by ID
- Get non-existing user

### POST

- Create a new user

### PUT

- Update existing user

### DELETE

- Delete user

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Git
- GitHub

## Author

QA Automation Engineer Portfolio Project
# Saucedemo Frontend Automation – Moxymind Technical Task

This repository contains automated frontend tests written in **Playwright** for the demo site [saucedemo.com](https://www.saucedemo.com), as part of the Moxymind technical assignment.

---

## Tech Stack

- [Playwright](https://playwright.dev/) (Node.js)
- Typescript
- CLI-based test execution
- Optional: headed mode for visual debugging

---

## Setup Instructions



```bash
# Clone the repo
git clone https://github.com/funkytn/saucedemo-tests.git
cd saucedemo-tests

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Running Tests

**Headless mode (default)**
```bash
npx playwright test
```

**Headed mode (with GUI)**
```bash
npx playwright test --headed
```

**Specific browser (e.g. Firefox)**
```bash
npx playwright test --headed --project=firefox
```

## Test Scenarios

- **Login with valid credentials**  
  Verifies that a valid user can log in and is redirected to the inventory page.

- **Add product to cart**  
  Adds a product and checks that it appears in the cart.

- **Remove product from cart**  
  Verifies that a previously added item can be removed successfully.

- **Checkout form validation**  
  Tries to proceed without filling required checkout fields and checks for error message.

## Structure

```
/tests
  saucedemo.spec.js     ← all E2E tests
/playwright.config.js   ← (optional) config for custom settings
```

## Notes

- Tests are intentionally written in a clear, linear format for readability.
- Each test covers an essential part of the e-commerce flow.
- No external accounts or setup required – saucedemo provides test data.

## 👤 Author

Peter – [funkytn](https://github.com/funkytn)




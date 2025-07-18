\# 🧪 Saucedemo Frontend Automation – Moxymind Technical Task



This repository contains automated frontend tests written in \*\*Playwright\*\* for the demo site \[saucedemo.com](https://www.saucedemo.com), as part of the Moxymind technical assignment.



---



\## 📦 Tech Stack



\- \[Playwright](https://playwright.dev/) (Node.js)

\- JavaScript

\- CLI-based test execution

\- Optional: headed mode for visual debugging



---



\## 🚀 Setup Instructions



```bash

\# Clone the repo

git clone https://github.com/funkytn/saucedemo-tests.git

cd saucedemo-tests



\# Install dependencies

npm install



\# Install Playwright browsers

npx playwright install





Running Tests

Headless mode (default)



npx playwright test



Headed mode (with GUI)



npx playwright test --headed



Specific browser (e.g. Firefox)



npx playwright test --headed --project=firefox



Test Scenarios



&nbsp;   Login with valid credentials

&nbsp;   Verifies that a valid user can log in and is redirected to the inventory page.



&nbsp;   Add product to cart

&nbsp;   Adds a product and checks that it appears in the cart.



&nbsp;   Remove product from cart

&nbsp;   Verifies that a previously added item can be removed successfully.



&nbsp;   Checkout form validation

&nbsp;   Tries to proceed without filling required checkout fields and checks for error message.



Structure



/tests

&nbsp; saucedemo.spec.js     ← all E2E tests

/playwright.config.js   ← (optional) config for custom settings



Notes



&nbsp;   Tests are intentionally written in a clear, linear format for readability.



&nbsp;   Each test covers an essential part of the e-commerce flow.



&nbsp;   No external accounts or setup required – saucedemo provides test data.



👤 Author



Peter – github.com/funkytn




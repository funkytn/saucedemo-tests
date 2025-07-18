// Automatizované testy pre Moxymind technickú úlohu
// Playwright + JavaScript

import { test, expect } from '@playwright/test';

// LOGIN TEST
test('Login with valid user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

// ADD TO CART
test('Add product to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('text=Add to cart'); // pridá prvý produkt do košíka
  await page.click('.shopping_cart_link'); // klik na košík
  await expect(page.locator('.cart_item')).toHaveCount(1); // očakáva 1 produkt v košíku
});

// REMOVE FROM CART
test('Remove product from cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('text=Add to cart');
  await page.click('.shopping_cart_link');
  await page.click('text=Remove');
  await expect(page.locator('.cart_item')).toHaveCount(0);
});

// CHECKOUT VALIDATION
test('Checkout form validation', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await page.click('text=Add to cart');
  await page.click('.shopping_cart_link');
  await page.click('text=Checkout');

  await page.click('#continue'); // skúsi pokračovať bez vyplnenia polí
  await expect(page.locator('h3')).toContainText('Error'); // čaká chybu
});

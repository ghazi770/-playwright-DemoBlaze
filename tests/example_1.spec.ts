import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("STORE");
});
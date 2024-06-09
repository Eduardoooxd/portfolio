import { expect, test } from '@playwright/test';

test.describe('404 Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/non-existent-page');
  });

  test('Should display a 404 message for non-existent routes', async ({ page }) => {
    // Navigate to a non-existent route
    await page.goto('/non-existent-page');
    // Check if the 404 text is present
    await expect(page.locator('h1')).toContainText('404');
    await expect(page.locator('h2')).toContainText('Page not found - Seems you look lost');

    const redirectLink = page.getByTestId('redirect-home-link');
    expect(redirectLink).toBeTruthy();
    await expect(redirectLink).toContainText('Click here to go back home');
    await expect(redirectLink).toHaveAttribute('href', '/');
  });

  test('Should redirect to landing page on click', async ({ page }) => {
    // Navigate to a non-existent route
    await page.goto('/non-existent-page');
    // Check if the 404 text is present

    const redirectLink = page.getByTestId('redirect-home-link');
    await redirectLink.click();

    await expect(page).toHaveURL('/');
  });
});

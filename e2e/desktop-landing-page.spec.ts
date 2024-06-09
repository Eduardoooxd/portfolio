import { expect, test } from '@playwright/test';

test.describe(`Desktop View For Landing Page`, () => {
  test.skip(({ isMobile }) => isMobile);

  test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/');
  });

  test('Should Display desktop header and no hamburger menu', async ({ page }) => {
    await page.goto('/');

    const openMobileMenuButton = page.getByTestId('open-mobile-menu-button');
    await expect(openMobileMenuButton).not.toBeVisible();

    const mobileMenuExpandedOptionsContainer = page.getByTestId(
      'mobile-menu-expanded-options-container',
    );
    await expect(mobileMenuExpandedOptionsContainer).not.toBeVisible();

    const desktopMenuExpandedOptionsContainer = page.getByTestId('desktop-menu-options-container');

    await expect(desktopMenuExpandedOptionsContainer).toBeVisible();
    await expect(desktopMenuExpandedOptionsContainer).toContainText('Home');
    await expect(desktopMenuExpandedOptionsContainer).toContainText('About');
    await expect(desktopMenuExpandedOptionsContainer).toContainText('Projects');
    await expect(desktopMenuExpandedOptionsContainer).toContainText('Skills');
    await expect(desktopMenuExpandedOptionsContainer).toContainText('Experience');
    await expect(desktopMenuExpandedOptionsContainer).toContainText('Contact');
  });
});

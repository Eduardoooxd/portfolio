import { expect, test } from '@playwright/test';

test.describe(`Mobile View For Landing Page`, () => {
  test.skip(({ isMobile }) => !isMobile);

  test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/');
  });

  test('Should display mobile header and hamburger menu', async ({ page }) => {
    await page.goto('/');

    const desktopMenuContainer = page.getByTestId('desktop-menu-container');
    await expect(desktopMenuContainer).not.toBeVisible();

    const openMobileMenuButton = page.getByTestId('open-mobile-menu-button');
    await expect(openMobileMenuButton).toBeVisible();
    await openMobileMenuButton.click();

    const closeMobileMenuButton = page.getByTestId('close-mobile-menu-button');
    await expect(closeMobileMenuButton).toBeVisible();

    const mobileMenuExpanded = page.getByTestId('mobile-menu-expanded');
    await expect(mobileMenuExpanded).toBeVisible();

    const mobileMenuExpandedOptionsContainer = page.getByTestId(
      'mobile-menu-expanded-options-container',
    );

    await expect(mobileMenuExpandedOptionsContainer).toBeVisible();
    await expect(mobileMenuExpandedOptionsContainer).toContainText('Home');
    await expect(mobileMenuExpandedOptionsContainer).toContainText('About');
    await expect(mobileMenuExpandedOptionsContainer).toContainText('Projects');
    await expect(mobileMenuExpandedOptionsContainer).toContainText('Skills');
    await expect(mobileMenuExpandedOptionsContainer).toContainText('Experience');
    await expect(mobileMenuExpandedOptionsContainer).toContainText('Contact');

    await closeMobileMenuButton.click();
    await expect(mobileMenuExpanded).not.toBeVisible();
  });
});

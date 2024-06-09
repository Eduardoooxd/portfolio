import { expect, test } from '@playwright/test';

test.describe('Landing Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the base URL before each test
    await page.goto('/');
  });

  test('Should have the appropriate page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Eduardo Couto/);
  });

  test('Should check content on hero section', async ({ page }) => {
    await expect(page.getByTestId('hero-message')).toContainText(
      "Hello, I'm Eduardo. I'm a full-stack developer with 2 years of experience. I enjoy buildingwebsites & applications. My main focus is with Java and React (Next.js).",
    );
  });

  test('Should navigate to the Projects section', async ({ page }) => {
    // Click on the Projects link
    await page.goto('/#projects');

    // Verify the Projects section is displayed by checking for a specific element
    const projectsHeading = page.getByTestId('projects-heading');

    await expect(projectsHeading).toBeTruthy();
    await expect(projectsHeading).toContainText('My projects');
    await expect(projectsHeading).toBeVisible();
  });

  test('Should submit the Contact form successfully', async ({ page }) => {
    // Navigate to the Contact section
    await page.goto('/#contact');

    // Fill the form
    await page.getByTestId('contact-name-input').pressSequentially('John Doe');
    await page.getByTestId('contact-email-input').fill('john.doe@example.com');
    await page.getByTestId('contact-message-input').fill('Hello, This is a test message.');

    // Click the submit button
    await page.click('text=Submit');

    const toastContainer = page.getByTestId('toast-container');
    // Verify submission success message or redirection
    await expect(toastContainer).toBeVisible();
    await expect(toastContainer).toContainText('Email sent successfully!');
  });

  test('Should show the contact form errors', async ({ page }) => {
    // Navigate to the Contact section
    await page.goto('/#contact');

    // Fill the form
    await page.getByTestId('contact-name-input').pressSequentially('J');
    await page.getByTestId('contact-email-input').fill('john.doe@example.com');
    await page.getByTestId('contact-message-input').fill('');
    // Click the submit button
    await page.click('text=Submit');

    // Verify the error messages
    await expect(page.getByTestId('invalid-name-warning')).toHaveText(
      'Name must be at least 2 characters long',
    );

    await expect(page.getByTestId('invalid-email-warning')).toBeHidden();

    await expect(page.getByTestId('invalid-message-warning')).toHaveText(
      'Message must be at least 10 characters long',
    );
  });
});

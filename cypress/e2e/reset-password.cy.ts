/// <reference path="../support/index.d.ts" />

describe('Reset Password', () => {
  it('should show error if password does not match', () => {
    cy.visit('/reset-password');

    cy.findByPlaceholderText(/^password/i).type('123');
    cy.findByPlaceholderText(/confirm password/i).type('321');
    cy.findByRole('button', { name: /reset password/i }).click();

    cy.findByText(/confirm password does not match with password/i).should('exist');
  });

  it('should show an error if provided code is invalid', () => {
    cy.visit('/reset-password?code=wrong_code');

    cy.findByPlaceholderText(/^password/i).type('1234');
    cy.findByPlaceholderText(/confirm password/i).type('1234');
    cy.findByRole('button', { name: /reset password/i }).click();

    cy.findByText(/Incorrect code provided/i).should('exist');
  });

  it('should fill the input, correctly reset password and be redirect to home page', () => {
    cy.intercept('POST', '**/auth/reset-password', (res) => {
      res.reply({
        status: 200,
        body: { user: { email: 'e2e@test.com ' } },
      });
    });

    cy.intercept('POST', '**/auth/callback/credentials*', {
      statusCode: 200,
      body: { user: { email: 'e2e@test.com' } },
    });

    cy.intercept('GET', '**/auth/session*', {
      statusCode: 200,
      body: { user: { name: 'e2e', email: 'e2e@test.com' } },
    });

    cy.visit('/reset-password?code=valid_code');

    cy.findByPlaceholderText(/^password/i).type('1234');
    cy.findByPlaceholderText(/confirm password/i).type('1234');
    cy.findByRole('button', { name: /reset password/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/`);

    cy.findByText(/e2e/i).should('exist');
  });
});

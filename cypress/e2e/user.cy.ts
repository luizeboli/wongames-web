/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate';

const user = createUser();

describe('User', () => {
  it('should be able to signup', () => {
    cy.signUp(user);
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    cy.findByText(user.username).should('exist');
  });

  it('should sign in and sign out', () => {
    cy.visit('/sign-in');
    cy.signIn(user);
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);

    cy.findByText(user.username).should('exist').click();
    cy.findByText(/sign out/i).click();
    cy.findByRole('link', { name: /sign in/i }).should('exist');
    cy.findByText(user.username).should('not.exist');
  });

  it('should redirect to sign in when trying to access private page and then redirect back to that page after login', () => {
    cy.visit('/profile/me');
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/me`);
    cy.signIn(user);
    cy.location('href').should('eq', `${Cypress.config().baseUrl}/profile/me`);

    cy.findByLabelText(/username/i).should('have.value', user.username);
    cy.findByLabelText(/e-mail/i).should('have.value', user.email);
  });
});

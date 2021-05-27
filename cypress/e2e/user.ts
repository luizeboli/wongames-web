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
    cy.signIn(user);
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);

    cy.findByText(user.username).should('exist').click();
    cy.findByText(/sign out/i).click();
    cy.findByRole('link', { name: /sign in/i }).should('exist');
    cy.findByText(user.username).should('not.exist');
  });
});

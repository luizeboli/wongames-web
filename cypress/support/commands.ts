// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';

Cypress.Commands.add('getByDataCy', (selector, ...args) => {
  return cy.get(`[data-cy="${selector}"]`, ...args);
});

Cypress.Commands.add('shouldRenderShowcase', ({ name, highlight = false }) => {
  cy.getByDataCy(name).within(() => {
    cy.findByRole('heading', { name }).should('exist');

    cy.getByDataCy('highlight').should(highlight ? 'exist' : 'not.exist');

    if (highlight) {
      cy.getByDataCy('highlight').within(() => {
        cy.findByRole('link').should('have.attr', 'href');
      });
    }

    cy.getByDataCy('game-card').should('have.length.gte', 0);
  });
});

Cypress.Commands.add('gamePriceShould', (selector, value) => {
  cy.findByText(/^\$\d+(\.\d{1,2})?/)
    .invoke('text')
    .then(($el) => $el.replace('$', ''))
    .then(parseFloat)
    .should(selector, value);
});

Cypress.Commands.add('signUp', (user) => {
  cy.visit('/sign-up');
  cy.findByPlaceholderText(/username/i).type(user.username);
  cy.findByPlaceholderText(/e-mail/i).type(user.email);
  cy.findByPlaceholderText(/^password/i).type(user.password);
  cy.findByPlaceholderText(/confirm password/i).type(user.password);
  cy.findByRole('button', { name: /sign up now/i }).click();
});

Cypress.Commands.add('signIn', (user = { username: 'e2e', email: 'e2e@test.com', password: '12345678' }) => {
  cy.findByPlaceholderText(/e-mail/i).type(user.email);
  cy.findByPlaceholderText(/^password/i).type(user.password);
  cy.findByRole('button', { name: /sign in/i }).click();
  cy.findByText(user.username).should('exist');;
});

Cypress.Commands.add('addGameToCartByIndex', (index) => {
  cy.getByDataCy('game-card')
    .eq(index)
    .within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click();
    });
});

Cypress.Commands.add('removeFromCartByIndex', (index) => {
  cy.getByDataCy('game-card')
    .eq(index)
    .within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click();
    });
});
/// <reference path="../support/index.d.ts" />

import { createUser } from '../support/generate';

describe('Free Games', () => {
  let user;

  before(() => {
    user = createUser();
  });

  it('should be able to buy free games', () => {
    cy.visit('/sign-in');
    cy.signIn();
    cy.visit('/games?price_lte=0');

    cy.addGameToCartByIndex(0);

    cy.findAllByLabelText(/cart items/i)
      .first()
      .click();

    cy.getByDataCy('cart-list').within(() => {
      cy.findByText(/buy it now/i).click();
    });

    cy.findByText(/only free games/i).should('exist');

    cy.findByRole('button', { name: /buy now/i }).click();

    cy.url().should('eq', `${Cypress.config().baseUrl}/success`);

    cy.findByText(/your purchase was successful!/i).should('exist');
  });
});

describe('Paid Games', () => {
  it('');
});

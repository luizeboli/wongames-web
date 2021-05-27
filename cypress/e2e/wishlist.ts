/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should be able to add and remove games from wishlist', () => {
    cy.visit('/wishlist');

    cy.signIn();

    cy.findByRole('heading', { name: /your wishlist is empty/i }).should('exist');

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.findAllByLabelText(/add to wishlist/i).click();
      });

    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1);
      cy.findAllByLabelText(/remove from wishlist/i).click();
      cy.findByRole('heading', { name: /your wishlist is empty/i }).should('exist');
    });
  });
});

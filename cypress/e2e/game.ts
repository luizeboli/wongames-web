/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  before(() => {
        cy.visit('/game/biomutant');
  })

  it('should render game page sections with API data', () => {
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('heading', { name: /Biomutant/i }).should('exist');
      cy.findByText(
        /Preorder now to get the Special Mercenary Class DLC and the Official Soundtrack, in addition the the full game Biomuntant. BIOMUTANT® is an open-world, post-ap/i,
      );
      cy.findByText('$199.09').should('exist');

      cy.findByRole('button', { name: /add to cart/i }).should('exist');
    });

    cy.findAllByRole('button', { name: /thumb \-/i }).should('have.length.gt', 0);

    cy.getByDataCy('game-content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist');
    });

    cy.getByDataCy('game-content').children().should('have.length.at.least', 2);

    cy.getByDataCy('game-details').within(() => {
      cy.findByRole('heading', { name: /game details/i }).should('exist');
      cy.findByRole('heading', { name: /developer/i }).should('exist');
      cy.findByRole('heading', { name: /release date/i }).should('exist');
      cy.findByRole('heading', { name: /platforms/i }).should('exist');
      cy.findByRole('heading', { name: /publisher/i }).should('exist');
      cy.findByRole('heading', { name: /rating/i }).should('exist');
      cy.findByRole('heading', { name: /genres/i }).should('exist');

      cy.findAllByText(/experiment 101/i).should('exist');
      cy.findByText(/may 23, 2021/i).should('exist');
      cy.findByRole('img', { name: /windows/i }).should('exist');
      cy.findByText(/free/i).should('exist');
      cy.findByText('Adventure / Action / Open World').should('exist');
    });

    cy.shouldRenderShowcase({ name: 'These are the upcoming games', highlight: true });
    cy.shouldRenderShowcase({ name: 'These are the recommended', highlight: false });
  });

  it('should add and remove game from cart', () => {
    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /add to cart/i }).click();
      cy.findByRole('button', { name: /remove from cart/i }).should('exist');
    })

    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('have.text', '1')
      .click();
    
    cy.getByDataCy('cart-list').within(() => {
      cy.findByRole('heading', { name: /biomutant/i}).should('exist')
    })

    cy.findAllByLabelText(/cart items/i)
      .first()
      .click();

    cy.getByDataCy('game-info').within(() => {
      cy.findByRole('button', { name: /remove from cart/i }).click();
      cy.findByRole('button', { name: /add to cart/i }).should('exist');
    });

    cy.findAllByLabelText(/cart items/i)
      .first()
      .should('not.exist');
  })
});

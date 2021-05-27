/// <reference path="../support/index.d.ts" />

import { priceFields, platformFields, sortFields, genreFields } from '../../src/utils/filter/fields';

describe('Explore Page', () => {
  before(() => {
    cy.visit('/games');
  });

  it('should render filters columns', () => {
    cy.findByRole('heading', { name: /sort by price/i }).should('exist');
    cy.findByRole('heading', { name: /^price/i }).should('exist');
    cy.findByRole('heading', { name: /platforms/i }).should('exist');
    cy.findByRole('heading', { name: /genres/i }).should('exist');

    priceFields.map(({ label }) => {
      cy.findByText(label).should('exist');
    });
    platformFields.map(({ label }) => {
      cy.findByText(label).should('exist');
    });
    sortFields.map(({ label }) => {
      cy.findByText(label).should('exist');
    });
    genreFields.map(({ label }) => {
      cy.findByText(label).should('exist');
    });
  });

  it('should show 15 games and show more games when show more button is clicked', () => {
    cy.getByDataCy('game-card').should('have.length', 15);
    cy.findByRole('button', { name: /show more/i }).click();
    cy.getByDataCy('game-card').should('have.length', 30);
  });

  it('should order by price', () => {
    cy.findByText(/lowest to highest/i).click();

    cy.location('href').should('contain', 'sort=price%3Aasc');

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.findByText('$0.00').should('exist');
      });

    cy.findByText(/highest to lowest/i).click();

    cy.location('href').should('contain', 'sort=price%3Adesc');

    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.gamePriceShould('be.gt', 0);
      });
  });

  it('should filter by price', () => {
    cy.findByText(/highest to lowest/i).click();

    cy.findByText(/free/i).click();
    cy.location('href').should('contain', 'price_lte=0');
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.findByText('$0.00').should('exist');
      });

    cy.findByText('Under $50').click();
    cy.location('href').should('contain', 'price_lte=50');
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.gamePriceShould('be.lt', 50);
      });

    cy.findByText('Under $100').click();
    cy.location('href').should('contain', 'price_lte=100');
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.gamePriceShould('be.lt', 100);
      });

    cy.findByText('Under $150').click();
    cy.location('href').should('contain', 'price_lte=150');
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.gamePriceShould('be.lt', 150);
      });

    cy.findByText('Under $250').click();
    cy.location('href').should('contain', 'price_lte=250');
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.gamePriceShould('be.lt', 250);
      });

    cy.findByText('Under $500').click();
    cy.location('href').should('contain', 'price_lte=500');
    cy.getByDataCy('game-card')
      .first()
      .within(() => {
        cy.gamePriceShould('be.lt', 500);
      });
  });
});

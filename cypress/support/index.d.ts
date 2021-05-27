/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string;
  highlight?: boolean;
};
declare namespace Cypress {
  interface Chainable {
    /**
     * Gets an element based on data-cy attribute
     *
     * @example cy.getByDataCy('highlight')
     */
    getByDataCy(selector: string): Chainable<Element>;

    /**
     * Check for a given showcase
     *
     * @example cy.shouldRenderShowcase()
     */
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>;
  }
}

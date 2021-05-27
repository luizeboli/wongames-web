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

    /**
     * Check for game price using selector
     *
     * @example cy.gamePriceShould('be.lt', 0)
     */
    gamePriceShould(selector: string, value: string | number): Chainable<Window>;

    /**
     * Sign up
     *
     * @example cy.signUp(user)
     */
    signUp(user): Chainable<Window>;

    /**
     * Sign up
     *
     * @example cy.signIn(user)
     */
    signIn(user): Chainable<Window>;
  }
}

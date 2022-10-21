/// <reference path="../support/index.d.ts" />

describe("Game Page", () => {
  it("should render game page sections with API data", () => {
    cy.request(
      "http://localhost:1337/api/games?populate=*&pagination[pageSize]=1"
    ).then((response) => {
      const firstGame = response.body.data[0].attributes;
      cy.visit(`/game/${firstGame.slug}`);

      cy.getByDataCy("game-info").within(() => {
        cy.findByRole("heading", { name: firstGame.name }).should("exist");
        cy.findByText(firstGame.short_description);
        cy.findByText(`$${firstGame.price}`).should("exist");

        cy.findByRole("button", { name: /add to cart/i }).should("exist");
      });

      cy.findAllByRole("button", { name: /thumb \-/i }).should(
        "have.length.gt",
        0
      );

      cy.getByDataCy("game-content").within(() => {
        cy.findByRole("heading", { name: /description/i }).should("exist");
      });

      cy.getByDataCy("game-content")
        .children()
        .should("have.length.at.least", 2);

      cy.getByDataCy("game-details").within(() => {
        cy.findByRole("heading", { name: /game details/i }).should("exist");
        cy.findByRole("heading", { name: /developer/i }).should("exist");
        cy.findByRole("heading", { name: /release date/i }).should("exist");
        cy.findByRole("heading", { name: /platforms/i }).should("exist");
        cy.findByRole("heading", { name: /publisher/i }).should("exist");
        cy.findByRole("heading", { name: /rating/i }).should("exist");
        cy.findByRole("heading", { name: /genres/i }).should("exist");

        cy.findAllByText(firstGame.developers.data[0].attributes.name).should(
          "exist"
        );
        firstGame.platforms.data.map((platform) => {
          cy.findByRole("img", {
            name: new RegExp(platform.attributes.name, "i"),
          }).should("exist");
        });
        cy.findByText(new RegExp(firstGame.rating, "i")).should("exist");
        cy.findByText(
          firstGame.categories.data
            .map((category) => category.attributes.name)
            .join(" / ")
        ).should("exist");
      });

      cy.shouldRenderShowcase({ name: "Upcoming Bombs", highlight: true });
      cy.shouldRenderShowcase({
        name: "Check out these titles!",
        highlight: false,
      });
    });
  });

  it("should add and remove game from cart", () => {
    cy.request(
      "http://localhost:1337/api/games?populate=*&pagination[pageSize]=1"
    ).then((response) => {
      const firstGame = response.body.data[0].attributes;
      cy.visit(`/game/${firstGame.slug}`);

      cy.getByDataCy("game-info").within(() => {
        cy.findByRole("button", { name: /add to cart/i }).click();
        cy.findByRole("button", { name: /remove from cart/i }).should("exist");
      });

      cy.findAllByLabelText(/cart items/i)
        .first()
        .should("have.text", "1")
        .click();

      cy.getByDataCy("cart-list").within(() => {
        cy.findByRole("heading", { name: firstGame.name }).should("exist");
      });

      cy.findAllByLabelText(/cart items/i)
        .first()
        .click();

      cy.getByDataCy("game-info").within(() => {
        cy.findByRole("button", { name: /remove from cart/i }).click();
        cy.findByRole("button", { name: /add to cart/i }).should("exist");
      });

      cy.findAllByLabelText(/cart items/i).should("not.exist");
    });
  });
});

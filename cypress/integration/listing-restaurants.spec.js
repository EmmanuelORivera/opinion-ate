describe("Listing Restaurants", () => {
  it("shows restaurants from the server", () => {
    const sushiPlace = "Sushi Place";
    const pizzaPlace = "Pizza Place";

    cy.server({ source404: true });

    cy.route({
      method: "GET",
      url: "https://outside-in-dev-api.herokuapp.com/lEayxTh67dZuZ899oOg2vLQGzH9v1neX/restaurants",
      response: [
        { id: 1, name: sushiPlace },
        { id: 2, name: pizzaPlace },
      ],
    });

    cy.visit("/");
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});

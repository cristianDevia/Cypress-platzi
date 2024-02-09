describe("First Test", () => {
  it("visit our website", () => {
    //window size
    cy.viewport(1920, 1080);
    // go to url
    cy.visit("https://www.platzi.com");
  });
});

describe("Work with inputs", () => {
  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    cy.visit("/automation-practice-form");
  });
  it("input type text", () => {
    cy.get("#firstName").type("Cristian");
    cy.get("#lastName").type("Devia");
    cy.get("#firstName").type("{selectAll}{backspace}");
  });
});

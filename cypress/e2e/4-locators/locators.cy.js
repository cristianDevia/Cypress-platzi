describe("Locators", () => {
  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    cy.visit("/automation-practice-form");
  });
  it("by tags", () => {
    cy.get("input");
  });
  it("by attribute", () => {
    cy.get('[placeholder="First Name"]');
  });
  it("by id", () => {
    cy.get("#firstName");
  });
  it.only("by class", () => {
    cy.get(".mr-sm-2.form-control");
  });
});

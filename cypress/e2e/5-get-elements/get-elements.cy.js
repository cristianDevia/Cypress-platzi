describe("Get Elements", () => {
  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    cy.visit("/automation-practice-form");
  });
  it("using contains", () => {
    cy.contains("Reading");
    cy.contains(".header-wrapper", "Widgets");
  });
  it.only("using parent", () => {
    cy.get('input[placeholder="First Name"]').parent();
    cy.get('input[placeholder="First Name"]').parents();
    cy.get('input[placeholder="First Name"]').parents().find("label");
    cy.get("form").find("label");
  });
});

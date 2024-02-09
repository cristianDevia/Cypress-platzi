describe("Click", () => {
  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
    cy.visit("/buttons");
  });
  it("click", () => {
    cy.get("button").eq(3).click();
    cy.get("#dynamicClickMessage")
      .should("be.visible")
      .and("contain", "You have done a dynamic click");
  });
  it("double click", () => {
    cy.get("#doubleClickBtn").dblclick();
    cy.get("#doubleClickMessage")
      .should("be.visible")
      .and("contain", "You have done a double click");
  });
  it("right click", () => {
    cy.get("#rightClickBtn").rightclick();
    cy.get("#rightClickMessage")
      .should("be.visible")
      .and("contain", "You have done a right click");
  });
});

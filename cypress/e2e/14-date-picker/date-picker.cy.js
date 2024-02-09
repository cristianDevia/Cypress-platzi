describe("Date Picker", () => {
  beforeEach(() => {
    cy.once("uncaught:exception", () => false);
  });
  it("date picker", function () {
    cy.visit("https://material.angular.io/components/datepicker/overview");

    cy.get("datepicker-overview-example")
      .find("label")
      .eq(0)
      // MM/DD/YYYY
      .type("02/09/2024");

    cy.get("datepicker-overview-example").find("button").click();
  });
});

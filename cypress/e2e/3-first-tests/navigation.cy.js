describe("Navigation", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });
  it("visit our website", () => {
    cy.visit("https://www.platzi.com");
  });
  it("visit our website and reload", () => {
    cy.visit("https://www.platzi.com");
    cy.reload();
  });
  it("visit our website and force reload", () => {
    cy.visit("https://www.platzi.com");
    cy.reload(true);
  });
  it("go back", () => {
    cy.visit("https://www.google.com/?hl=es");
    cy.visit(
      "https://www.google.com/search?q=platzi&sca_esv=601452934&hl=es&sxsrf=ACQVn083ulvonHV-j7FCLZm8lyrLFqZsNA%3A1706205476720&source=hp&ei=JKGyZdWNKsahur8Pz9SdoAc&iflsig=ANes7DEAAAAAZbKvNHB7fFMtbqQpk91CLSIzsEfup1l9&ved=0ahUKEwjVr-jajvmDAxXGkO4BHU9qB3QQ4dUDCA0&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emkyERAuGIAEGLEDGIMBGMcBGNEDMgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESMUMUIkEWJQIcAF4AJABAJgBe6ABmAWqAQMxLjW4AQPIAQD4AQGoAgrCAgcQIxjqAhgnwgIQEC4YxwEYrwEYjgUY6gIYJ8ICCBAAGIAEGLEDwgILEC4YgAQYxwEYrwHCAgsQLhiABBixAxiDAQ&sclient=gws-wiz"
    );
    cy.go("back");
  });
  it("go forward", () => {
    cy.visit("https://www.google.com/?hl=es");
    cy.visit(
      "https://www.google.com/search?q=platzi&sca_esv=601452934&hl=es&sxsrf=ACQVn083ulvonHV-j7FCLZm8lyrLFqZsNA%3A1706205476720&source=hp&ei=JKGyZdWNKsahur8Pz9SdoAc&iflsig=ANes7DEAAAAAZbKvNHB7fFMtbqQpk91CLSIzsEfup1l9&ved=0ahUKEwjVr-jajvmDAxXGkO4BHU9qB3QQ4dUDCA0&uact=5&oq=platzi&gs_lp=Egdnd3Mtd2l6IgZwbGF0emkyERAuGIAEGLEDGIMBGMcBGNEDMgsQABiABBixAxiDATIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESMUMUIkEWJQIcAF4AJABAJgBe6ABmAWqAQMxLjW4AQPIAQD4AQGoAgrCAgcQIxjqAhgnwgIQEC4YxwEYrwEYjgUY6gIYJ8ICCBAAGIAEGLEDwgILEC4YgAQYxwEYrwHCAgsQLhiABBixAxiDAQ&sclient=gws-wiz"
    );
    cy.go(-1);
    cy.go(1);
  });
});

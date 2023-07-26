describe("e2e Test", () => {
  it("Go to 'The Flash'", async () => {
    cy.visit("http://localhost:3000");
    cy.wait(2000);
    cy.get('a[href*="/movie/298618').click();
    cy.wait(2000);
    cy.url().should("include", "/movie/298618");
    cy.get("h2").contains("The Flash");
    cy.get('a[href*="/').click();
  });
});

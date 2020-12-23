describe("Check counter behavior", () => {
  beforeEach(() => {
    // open indicated URL in cypress.json
    // in this case "localhost:9000"
    cy.visit("/");
  });

  it("Click counter 1 * 1", () => {
    cy.get('[data-counter-id="standard"]')
      .click()
      .get('[data-counter-id="counts"]')
      .should("have.text", "1");
  });

  it("Click counter 1 * 2", () => {
    cy.get('[data-counter-id="standard"]')
      .click()
      .click()
      .get('[data-counter-id="counts"]')
      .should("have.text", "2");
  });

  it("Click counter 1 * 2 + 10 * 4", () => {
    cy.get('[data-counter-id="uncommon"]')
      .click()
      .click()
      .click()
      .click()
      .get('[data-counter-id="standard"]')
      .click()
      .click()
      .get('[data-counter-id="counts"]')
      .should("have.text", "42");
  });

  it("Click counter 1 * 2 + 10 * 6 100 * 2", () => {
    cy.get('[data-counter-id="super"]')
      .click()
      .click()
      .get('[data-counter-id="uncommon"]')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .get('[data-counter-id="standard"]')
      .click()
      .click()
      .get('[data-counter-id="counts"]')
      .should("have.text", "262");
  });

  it("Click counter 1 * 4 + 10 * 2 100 * 4 + 1000 * 4", () => {
    cy.get('[data-counter-id="incredible"]')
      .click()
      .click()
      .click()
      .click()
      .get('[data-counter-id="super"]')
      .click()
      .click()
      .click()
      .click()
      .get('[data-counter-id="uncommon"]')
      .click()
      .click()
      .get('[data-counter-id="standard"]')
      .click()
      .click()
      .click()
      .click()
      .get('[data-counter-id="counts"]')
      .should("have.text", "4424");
  });

  it("Over 9000 !!!!", () => {
    cy.get('[data-counter-id="incredible"]')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .get("iframe")
      .should("exist");
  });
});

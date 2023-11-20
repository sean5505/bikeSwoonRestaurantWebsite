describe("Create Account Functionality", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.get("button").contains("Create New Account").click();
  });
  it("Creates a random account, afterwards deletes the account primarily for documentation purposes", () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const password = "password123";

    cy.wait(1000);

    cy.get("#Name").type("Cypress Test");
    cy.get("._createAccount_1p154_1 > #email").type(
      `cytest${randomNumber}@test.com`
    );
    cy.get(":nth-child(6) > #password").type(password);
    cy.get("#ConfirmPassword").type(password);
    cy.get("._createAccount_1p154_1 > button").click();

    cy.wait(3000); // Need to utlize network requests instead of wait in this instance
    cy.visit("/profile");
    cy.wait(2000);
    cy.get('[title="Delete Account"]').click();
    cy.wait(1000);
    cy.get("._modalContent_19a98_61 > div > input").type(password);
    cy.get("._modalActions_19a98_77 > :nth-child(2)").click();
    cy.wait(3000);
    cy.url().should("include", "/");
  });
  it("On Click while input fields are empty, create account button becomes disabled and error messages are shown", () => {
    cy.wait(2000);
    cy.get("button").contains("Create Account").click();
    cy.get("button").contains("Create Account").should("be.disabled");
    cy.get('[data-testid="name-error"]').contains("Required").should("exist");
    cy.get('[data-testid="email-error"]').contains("Required").should("exist");
    cy.get('[data-testid="password-error"]').contains("Password is Required").should("exist");
    cy.get('[data-testid="confirmPassword-error"]').contains("Required").should("exist");
  });
  it("Upon valid input the error messages disappear and create account button is no longer disabled", () => {
    cy.get("button").contains("Create Account").click();
    cy.get("button").contains("Create Account").should("be.disabled");
    cy.wait(1000);
    cy.get("#Name").type("Cypress Test");
    cy.get('[data-testid="name-error"]').should("not.exist");
    cy.get("._createAccount_1p154_1 > #email").type(`cytest@test.com`);
    cy.get('[data-testid="email-error"]').should("not.exist");
    cy.get(":nth-child(6) > #password").type("testuser123");
    cy.get('[data-testid="password-error"]').should("not.exist");
    cy.get("#ConfirmPassword").type("testuser12");
    cy.get('[data-testid="confirmPassword-error"]').contains('Passwords do not match').should("exist");
    cy.wait(2000)
    cy.get("#ConfirmPassword").type("3"); //appends a 3 to the last instance of confirmPassword so it matched the password
    cy.get('[data-testid="confirmPassword-error"]').should("not.exist");
    cy.get("button").contains("Create Account").should("not.be.disabled");
  
  });
});

describe("User Functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  
  it("If the user tries to sign in with an incorrect email or password, an error message is shown", () => {
    cy.visit("/login");
    cy.wait(1000);
    cy.get("#error-message").should("not.exist");
    cy.get("[data-testid=email-test]").type("idea40@live.com");
    cy.get("[data-testid=password-test]").type("soifjdfj");
    cy.get("button").contains("Login").click();
    cy.get("#error-message").contains("Invalid Email Or Password").should("exist");
  });
  it("sucessfully signs user in", () => {
    cy.visit("/login");
    cy.get("[data-testid=email-test]").type("idea40@live.com");
    cy.get("[data-testid=password-test]").type("steven5505");
    cy.get("button").contains("Login").click();

    cy.url().should("include", "/");
  });
  it("Sucessfully signs out User", () => {
    
    cy.visit("/profile");
    cy.wait(1000);
    cy.get("button").contains("Sign Out").click();
    cy.wait(1000);
    cy.get("button").contains("Continue").click();
    cy.url().should("include", "/");
    // expect(localStorage.getItem('isAuthenticated')).to.equal(false)
  });

});

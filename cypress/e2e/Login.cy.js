// Login.cy.js

it("Login and Logout from OpenMRS demo portal", () => {
    cy.visit("https://dev3.openmrs.org/openmrs/spa/login");
  
    // Step 1: Username
    cy.get("#username").type("admin");
    cy.contains('button', 'Continue').click();
  
    // Step 2: Password
    cy.get("#password").should("be.visible").type("Admin123");
    cy.contains('button', 'Log in').click();
  
    // Step 3: Verify dashboard/homepage
    cy.contains('Home', { timeout: 10000 }).should('be.visible');
    //cy.get('h2').should('contain', 'Welcome'); // Optional visual confirmation
  
    // Step 4: Logout
    //We need to click my account and then logout
    cy.get('[data-extension-id="user-menu-button"] > .cds--popover-container > .cds--tooltip-trigger__wrapper > .-esm-primary-navigation__navbar__activePanel___QUwvm').click(); // Click user menu
    cy.get('.-esm-login__logout__logout___fmll0').click();
  
    // Step 5: Verify redirect back to login
    cy.url().should('include', '/login');
    cy.contains('Login to Your Account').should('be.visible');
  });
  
it("Login and Register a New Patient", () => {
    cy.visit("https://dev3.openmrs.org/openmrs/spa/login");
  
    // Login steps
    cy.get("#username").type("admin");
    cy.contains("button", "Continue").click();
    cy.get("#password").should("be.visible").type("Admin123");
    cy.contains("button", "Log in").click();
  
    // Verify dashboard
    cy.contains("Home", { timeout: 10000 }).should("be.visible");
  
    // Open Patient Registration
    cy.get('.-esm-patient-registration__add-patient-link__slotStyles___ejEWZ').click();
  
    // Fill patient details - STEP 1: Name
    cy.get('#givenName').type("John");
    cy.get('#familyName').type("Doe");
  
    // Select gender
    cy.contains("label", "Male").click();
  
    // Select birth date
    // Since the DOB is flaky we will use a fixed date
    cy.get(':nth-child(3) > :nth-child(2) > .cds--content-switcher > [tabindex="-1"]').click(); // Click to switch to date of birth
    cy.get('#yearsEstimated').click().clear(); // Click to enter year
    cy.get('#yearsEstimated').type("34"); // Enter year
    cy.get('#monthsEstimated').type("3"); // Enter month
    cy.get('.-esm-patient-registration__field__configureIdentifiersButton___eM7Fu').click(); // Click to configure identifiers
    cy.get(':nth-child(2) > .cds--form-item > .cds--checkbox-label').click(); // Check the "Add Identifier" checkbox
    cy.get('.-esm-patient-registration__identifier-selection__tablet___mHt6H > .cds--btn--primary').click(); // Click to add identifier
    // Continue to next section
    // We now input the ID numner
    // cy.contains('#identifiers.idCard.identifierValue').click().type("123456789"); // Enter identifier value
    // cy.contains("button", "Next").click();
  
    // STEP 2: Contact Details

    // Enter address line 1
    cy.get('#address1').type("123 Cypress Lane");
    // Enter address line 2
    cy.get('#address2').type("123 Cypress Lane");
    // Enter city
    cy.get('#cityVillage').type("Greece");
    // Enter state/province
    cy.get('#stateProvince').type("Attica");
    // Enter country
    cy.get('#country').type("Greece");
    // Enter postal code
    cy.get('#postalCode').type("12345");
    // Enter phone number
    cy.get('#phone').type("1234567890");
    
  
    // STEP 3: Relationships (optional)
    // Skip relationships for now
  
    // Submit patient registration
    cy.get('.-esm-patient-registration__patient-registration__submitButton___Ps1do').click();
  
    // Confirm registration success
    cy.contains("John Doe", { timeout: 10000 }).should("be.visible");
  });
  
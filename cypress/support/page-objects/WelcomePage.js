export class WelcomePage {
  get logoSwimlane() {
    return cy.get('.logo-text');
  }

  get btnSearch() {
    return cy.get('.global-search--button');
  }

  get dropdownProfile() {
    return cy.get('.ngx-dropdown-toggle');
  }

  navToProfile(lbl) {
    this.dropdownProfile.click();
    cy.get('.subnav-label').contains(lbl).click();
  }

  navSidebar(sidebar) {
    return cy.get('.nav-label').contains(sidebar);
  }
}
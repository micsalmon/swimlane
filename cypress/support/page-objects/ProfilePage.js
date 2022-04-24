export class ProfilePage {
  get name() {
    return cy.get('.user-displayname');
  }
}
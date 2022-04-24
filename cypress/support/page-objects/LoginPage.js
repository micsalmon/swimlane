import { WelcomePage } from '../page-objects/WelcomePage';

const welcome = new WelcomePage();

export class LoginPage {
  get msgWelcome() {
    return cy.get('[data-cy=welcome__message]');
  }

  get fldUsername() {
    return cy.get('#input-1');
  }

  get fldPassword() {
    return cy.get('#input-2');
  }

  get btnLogin() {
    return cy.get('[data-cy=submit__btn]');
  }

  get togPwdVisibility() {
    return cy.get('.icon-eye');
  }

  get errLogin() {
    return cy.get('.login-error');
  }

  login(username, password) {
    this.fldUsername.type(`{selectall}${username}`);
    this.fldPassword.type(`{selectall}${password}`);
    this.btnLogin.click();
    welcome.logoSwimlane.should('be.visible');
  }
}

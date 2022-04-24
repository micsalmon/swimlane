import { LoginPage } from '../../support/page-objects/LoginPage';

const login = new LoginPage();
const constants = 'constants.json';
let url, msg, credentials;

context('Login Page', () => {
  before(() => {
    cy.fixture(constants).then((data) => {
      url = data.urls;
      msg = data.msg;
      credentials = data.credentials;
    });
  });

  beforeEach(() => {
    cy.visit(url.LOGIN_PAGE);
  });

  describe('Login page validation', () => {
    it('Contains the correct title', () => {
      login.msgWelcome.invoke("text").should('equal', msg.WELCOME_MESSAGE);
    });

    it('Validate login page components', () => {
      login.fldUsername.should('be.visible');
      login.fldPassword.should('be.visible');
      login.btnLogin.should('be.visible');
      login.togPwdVisibility.should('be.visible');
    });

    it('Eye icon displays password text', () => {
      login.fldPassword.type(`{selectall}${credentials.BAD_PASSWORD}`);
      login.togPwdVisibility.click();
      login.fldPassword.should('contain.value', credentials.BAD_PASSWORD);
    });
  });

  describe('Login functionality', () => {
    it('Login unsuccessful', () => {
      login.fldUsername.type(`{selectall}${credentials.BAD_USERNAME}`);
      login.fldPassword.type(`{selectall}${credentials.BAD_PASSWORD}`);
      login.btnLogin.click();
      login.errLogin.should('be.visible');
    });

    it('Login successful', () => {
      login.login(credentials.GOOD_USERNAME, credentials.GOOD_PASSWORD);
      cy.url().should('contain', url.WELCOME_PAGE);
    });
  });
});
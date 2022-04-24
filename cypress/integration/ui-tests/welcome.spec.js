import { WelcomePage } from '../../support/page-objects/WelcomePage';
import { LoginPage } from '../../support/page-objects/LoginPage';
import { SearchModal } from '../../support/page-objects/SearchModal';
import { ProfilePage } from '../../support/page-objects/ProfilePage';

const welcome = new WelcomePage();
const login = new LoginPage();
const search = new SearchModal();
const ppo = new ProfilePage();
const sidebars = ['Workspaces', 'Dashboards', 'Application Records', 'Reports'];
const constants = 'constants.json';
let url, credentials, profile;
  
context('Welcome Page', () => {
  before(() => {
    cy.fixture(constants).then((data) => {
      url = data.urls;
      credentials = data.credentials;
      profile = data.profile;
    });
  });

  describe('Navigate application', () => {
    beforeEach(() => {
      cy.visit(url.WELCOME_PAGE);
      login.login(credentials.GOOD_USERNAME, credentials.GOOD_PASSWORD);
    });

    it('Validate the sidebar and other page elements', () => {
      for (const sidebar of sidebars) {
        welcome.navSidebar(sidebar);
      };
      welcome.logoSwimlane.should('be.visible');
      welcome.btnSearch.should('be.visible');
      welcome.dropdownProfile.should('be.visible');
    });

    it('Validate search modal', () => {
      welcome.btnSearch.click();
      search.searchBanner.should('be.visible');
    });

    it('Nav to profile page', () => {
      welcome.navToProfile(profile.PROFILE);
      ppo.name.should('be.visible');
    });
  });
});
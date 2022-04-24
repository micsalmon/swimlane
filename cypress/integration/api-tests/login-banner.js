describe('Login banner API tests', () => {
  it('Returns status code 200', () => {
    cy.request('/api/settings/login-banner').as('login-banner');
    cy.get('@login-banner').then(banner => {
      expect(banner.status).to.eq(200);
    });
  });
});
describe('Password complexity API tests', () => {
  it('Returns status code 200', () => {
    cy.request('/api/settings/password-complexity').as('password-complexity');
    cy.get('@password-complexity').then(password => {
      expect(password.status).to.eq(200);
    });
  });
});

describe('Open OOS-CA app', function() {
 it('open dashboard', function() {
  cy.visit('http://localhost:3000/')
  cy.get('.App-header').should('be.visible')
 });
});
describe('Homepage', () => {
  it('Loads the page', () => {
    cy.visit('http://localhost:3000/trip');
    cy.contains('Olympic trip');
  });
});

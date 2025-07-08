describe('Button Visual Regression', () => {
  it('should match the previous screenshot', () => {
    cy.visit('/'); // Adjust if your button is on a different route
    cy.get('button').first().matchImageSnapshot();
  });
}); 
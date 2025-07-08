describe('Navigation and Routing', () => {
  it('navigates from home to login and posts via navbar', () => {
    cy.visit('/');
    cy.get('[data-testid=nav-login]').click();
    cy.url().should('include', '/login');
    cy.contains('Login');

    cy.get('[data-testid=nav-posts]').click();
    cy.url().should('include', '/posts');
    cy.contains('Posts');
  });

  it('shows 404 for unknown route', () => {
    cy.visit('/not-a-real-page', { failOnStatusCode: false });
    cy.contains('404').should('exist');
  });

  it('redirects to login for protected route if not authenticated', () => {
    cy.visit('/protected', { failOnStatusCode: false });
    cy.url().should('include', '/login');
    cy.contains('Login');
  });

  it('allows access to protected route after login', () => {
    cy.visit('/login');
    cy.get('input[aria-label=Email]').type('test@example.com');
    cy.get('input[aria-label=Password]').type('password123');
    cy.get('button[type=submit]').click();
    cy.contains('Login successful!').should('exist');
    // Simulate navigation to protected route
    cy.visit('/protected');
    cy.contains('Protected Content').should('exist');
  });
}); 
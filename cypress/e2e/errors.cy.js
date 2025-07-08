describe('Error Handling and Edge Cases', () => {
  it('shows error message on failed login', () => {
    cy.visit('/login');
    cy.get('input[aria-label=Email]').type('wrong@example.com');
    cy.get('input[aria-label=Password]').type('wrongpass');
    cy.get('button[type=submit]').click();
    cy.contains('Error: Invalid credentials').should('exist');
  });

  it('shows error message if posts API fails', () => {
    cy.intercept('GET', '/api/posts', { statusCode: 500 }).as('getPostsError');
    cy.visit('/posts');
    cy.wait('@getPostsError');
    cy.contains(/error/i).should('exist');
  });

  it('shows no posts message if posts API returns empty array', () => {
    cy.intercept('GET', '/api/posts', { body: [] }).as('getPostsEmpty');
    cy.visit('/posts');
    cy.wait('@getPostsEmpty');
    cy.contains(/no posts found/i).should('exist');
  });

  it('redirects to login for unauthorized access to protected route', () => {
    cy.visit('/protected', { failOnStatusCode: false });
    cy.url().should('include', '/login');
    cy.contains('Login');
  });

  it('shows 404 page for unknown route', () => {
    cy.visit('/not-a-real-page', { failOnStatusCode: false });
    cy.contains('404').should('exist');
  });
}); 
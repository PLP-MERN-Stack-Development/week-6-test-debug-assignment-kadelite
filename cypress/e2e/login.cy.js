describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('shows validation errors for empty fields', () => {
    cy.get('button[type=submit]').click();
    cy.contains('Email is required').should('exist');
    cy.contains('Password is required').should('exist');
  });

  it('shows error for invalid email', () => {
    cy.get('input[aria-label=Email]').type('invalid');
    cy.get('input[aria-label=Password]').type('password123');
    cy.get('button[type=submit]').click();
    cy.contains('Invalid email').should('exist');
  });

  it('shows error for invalid credentials', () => {
    cy.get('input[aria-label=Email]').type('wrong@example.com');
    cy.get('input[aria-label=Password]').type('wrongpass');
    cy.get('button[type=submit]').click();
    cy.contains('Error: Invalid credentials').should('exist');
  });

  it('logs in with valid credentials', () => {
    cy.get('input[aria-label=Email]').type('test@example.com');
    cy.get('input[aria-label=Password]').type('password123');
    cy.get('button[type=submit]').click();
    cy.contains('Login successful!').should('exist');
    cy.contains('mock-jwt-token').should('exist');
  });
}); 
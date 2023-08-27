describe('Route Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check all working routes', () => {
    // About page
    cy.visit('/about');
    cy.location('pathname').should('equal', '/about');

    // Post page
    cy.visit('/posts/1');
    cy.location('pathname').should('equal', '/posts/1');

    // Return back to home page
    cy.visit('/');
    cy.location('pathname').should('equal', '/');
  });

  it('Check all working routes via links', () => {
    // About page
    cy.get('[data-test="about-link"]').click();
    cy.location('pathname').should('equal', '/about');

    // Post page
    cy.get('[data-test="post-link"]').click();
    cy.location('pathname').should('equal', '/posts/1');

    // Return back to home page
    cy.get('[data-test="home-link"]').click();
    cy.location('pathname').should('equal', '/');
  });
});

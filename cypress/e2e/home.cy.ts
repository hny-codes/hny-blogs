describe('Home page test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Check page content', () => {
    // Site header
    cy.get('[data-test="hero-text"]').contains(
      /Welcome! You stumbled upon my humble atelier!/i
    );

    // Posts
    cy.get('[data-test="post-title"]').contains(/Latest Posts/i);

    // Check for latest 3 posts on home
    cy.get('[data-test="home-post-list"]').within(() => {
      cy.get('li').should('have.length', 3);
    });

    cy.get('[data-test="home-post-list"]>li').each(($match) => {
      cy.wrap($match).click();
    });
    
  });
});

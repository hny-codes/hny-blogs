describe('About page test', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('Check page content', () => {
    // Site header
    cy.get('[data-test="about-text"]').contains(/Welcome to my blog!/i);

    // Check all working links within blog
    // REFERENCE: https://www.cypress.io/blog/2020/12/10/testing-the-anchor-links/
    cy.get('[data-test="other-links"]').within(() => {
      cy.get('a').each(($a) => {
        const message = $a.text();
        expect($a, message).to.have.attr('href').not.contain('undefined');
      });
    });
  });
});

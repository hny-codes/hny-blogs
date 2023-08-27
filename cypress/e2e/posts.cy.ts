describe('Post page test', () => {
  beforeEach(() => {
    cy.visit('/posts/1');
  });

  it('Check page content', () => {
    // Site header
    cy.get('[data-test="post-text"]').contains(/All Posts/i);

    // Check for 5 posts per page
    cy.get('ul').within(() => {
      cy.get('li').should('have.length', 5);
    });

    // Check each post
    cy.get('ul>li').each(($match) => {
      cy.wrap($match).click();
    });
  });

  it.only('Check pagination buttons', () => {
    // Left pagination button
    cy.get('[data-test="prev-button-disabled"]').should('exist');
    cy.visit('/posts/2');
    cy.get('[data-test="prev-button-disabled"]').should('not.exist');

    cy.visit('/posts/1');

    // Right pagination button
    cy.get('[data-test="next-button-disabled"]').should('not.exist');

    // Check pagination and check last page
    const paginate = () => {
      cy.get('[data-test="next-button-disabled"]').then((btn) => {
        if (btn.hasClass('btn-disabled')) {
          cy.get('[data-test="next-button-disabled"]').should('exist');
          return;
        }

        cy.wrap(btn).click();
        paginate();
      });
    };
  });
});

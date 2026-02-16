describe('Job Listings App', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('displays header', function() {
    cy.visit('/')
    cy.get('header').should('be.visible')

  });

  it('clicking a tag adds a filter', function() {
    cy.visit('/')
    cy.get('.card__tags button.tag').contains('Frontend').click();
    cy.get('.filter-bar__filters').should('contain', 'Frontend');
    cy.get('[data-cy=job-card]').each(card => {
      cy.wrap(card).should('contain', 'Frontend')
    })
  });

  it('remove a filter', function() {
    cy.visit('/')

    cy.get('[data-cy=job-card]').its('length').as('count')

    cy.contains('[data-cy=tag]', 'Python').click()

    cy.get('[data-cy=job-card]').each(card => {
      cy.wrap(card).should('contain', 'Python')
    })

    cy.get('[data-cy=remove-filter]').click()

    cy.get('@count').then(count => {
      cy.get('[data-cy=job-card]').should('have.length', count)
    })
  });
});

describe('Job Listings App', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('clicking a tag adds  it as a filter', () => {
    cy.get('.card__tags button.tag').contains('Frontend').click();
    cy.get('.filter-bar__filters').should('contain', 'Frontend');
    cy.get('[data-cy=job-card]').each(card => {
      cy.wrap(card).should('contain', 'Frontend')
    })
  });

  it('removes filter when clicking remove filter button in filter bar', () => {
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

  it('renders each card with company name, position, and meta info', () => {
    // Verify the first card (Photosnap) has all expected content
    cy.get('[data-cy=job-card]').first().within(() => {
      cy.get('.card__company').should('contain', 'Photosnap')
      cy.get('.card__position').should('contain', 'Senior Frontend Developer')
      cy.get('.card__meta').should('contain', '1d ago')
      cy.get('.card__meta').should('contain', 'Full Time')
      cy.get('.card__meta').should('contain', 'USA Only')
    })
  })

  it('renders correct tags for a job listing', () => {
    // Photosnap should have: Frontend, Senior, HTML, CSS, JavaScript
    cy.get('[data-cy=job-card]').first().within(() => {
      cy.get('[data-cy=tag]').should('have.length', 5)
      cy.contains('[data-cy=tag]', 'Frontend')
      cy.contains('[data-cy=tag]', 'Senior')
      cy.contains('[data-cy=tag]', 'HTML')
      cy.contains('[data-cy=tag]', 'CSS')
      cy.contains('[data-cy=tag]', 'JavaScript')
    })
  })

  it('shows NEW! badge only on new listings', () => {
    // Photosnap, Manage, Account are new (ids 1, 2, 3)
    cy.get('.badge--new').should('have.length', 3)
  })

  it('shows FEATURED badge only on featured listings', () => {
    // Photosnap and Manage are featured (ids 1, 2)
    cy.get('.badge--featured').should('have.length', 2)
  })

  it('shows filter bar only when filters are active', () => {
    cy.get('.filter-bar').should('not.exist')

    // Add a filter
    cy.contains('[data-cy=tag]', 'CSS').first().click()

    cy.get('.filter-bar').should('be.visible')
  })

  it('narrows results when multiple filters are applied', () => {
    // Add "JavaScript" — many cards match
    cy.contains('[data-cy=tag]', 'JavaScript').first().click()
    cy.get('[data-cy=job-card]').its('length').then((countAfterFirst) => {
      // Add "React" — should narrow further
      cy.contains('[data-cy=tag]', 'React').first().click()
      cy.get('[data-cy=job-card]').its('length').should('be.lessThan', countAfterFirst)
    })
  })

  it('shows multiple filter chips in the filter bar', () => {
    cy.contains('[data-cy=tag]', 'Frontend').first().click()
    cy.contains('[data-cy=tag]', 'Senior').first().click()

    cy.get('.filter__label').should('have.length', 2)
    cy.get('.filter-bar__filters').should('contain', 'Frontend')
    cy.get('.filter-bar__filters').should('contain', 'Senior')
  })

  it('all visible cards match every active filter', () => {
    cy.contains('[data-cy=tag]', 'JavaScript').first().click()
    cy.contains('[data-cy=tag]', 'Sass').first().click()

    cy.get('[data-cy=job-card]').each((card) => {
      cy.wrap(card).within(() => {
        cy.contains('[data-cy=tag]', 'JavaScript')
        cy.contains('[data-cy=tag]', 'Sass')
      })
    })
  })

  it('removes a single filter and updates results', () => {
    cy.get('[data-cy=job-card]').its('length').as('initialCount')

    cy.contains('[data-cy=tag]', 'Python').first().click()
    cy.get('[data-cy=job-card]').should('have.length', 2)

    cy.get('[data-cy=remove-filter]').click()

    cy.get('@initialCount').then((count) => {
      cy.get('[data-cy=job-card]').should('have.length', count)
    })
  })

  it('clears all filters when clicking Clear', () => {
    cy.contains('[data-cy=tag]', 'Frontend').first().click()
    cy.contains('[data-cy=tag]', 'Senior').first().click()

    cy.get('.filter-bar').should('be.visible')
    cy.get('.filter__label').should('have.length', 2)

    cy.get('.filter-bar__clear-btn').click()

    cy.get('.filter-bar').should('not.exist')
    cy.get('[data-cy=job-card]').should('have.length', 10)
  })

  it('toggling a selected tag removes it from filters', () => {
    cy.contains('[data-cy=tag]', 'Ruby').first().click()
    cy.get('.filter-bar__filters').should('contain', 'Ruby')

    // The tag should have selected styling
    cy.get('[data-cy=job-card]').first().within(() => {
      cy.contains('[data-cy=tag]', 'Ruby').should('have.class', 'tag--selected')
    })

    // Click it again to deselect
    cy.get('[data-cy=job-card]').first().within(() => {
      cy.contains('[data-cy=tag]', 'Ruby').click()
    })

    cy.get('.filter-bar').should('not.exist')
  })

  it('selected tags have active styling', () => {
    cy.contains('[data-cy=tag]', 'JavaScript').first().click()

    // All JavaScript tags across cards should show selected state
    cy.get('[data-cy=tag]').filter(':contains("JavaScript")').each(($tag) => {
      cy.wrap($tag).should('have.class', 'tag--selected')
    })
  })

  it('hides mobile header image on larger viewports', () => {
    cy.viewport(1280, 720)

    cy.get('.header__bg-mobile').should('not.be.visible')
    cy.get('.header__bg-desktop').should('be.visible')
  })

  it('shows mobile header image on small viewports', () => {
    cy.viewport(320, 667)
    cy.get('.header__bg-mobile').should('be.visible')
  })

  it('hides card divider on desktop', () => {
    cy.viewport(1280, 720)
    cy.get('.card__divider').first().should('not.be.visible')
  })

  it('header background images are hidden from screen readers', () => {
    cy.get('.header__bg-mobile').should('have.attr', 'aria-hidden', 'true')
    cy.get('.header__bg-desktop').should('have.attr', 'aria-hidden', 'true')
  })

  it('filter remove buttons have accessible alt text', () => {
    cy.contains('[data-cy=tag]', 'Frontend').first().click()

    cy.get('[data-cy=remove-filter] img')
      .should('have.attr', 'alt')
      .and('include', 'Remove')
  })

})

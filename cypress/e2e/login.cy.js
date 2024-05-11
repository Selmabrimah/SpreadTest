describe('Login Feature', () => {
    it('Verify User Can Login with right Credentials (Fast approach)', () => {
      cy.visit('/')
      cy.get('[src="/web/images/ohrm_branding.png?v=1711595107870"]').should('be.visible')
      cy.get('[placeholder="Username"]').type('Admin')
      cy.get('[placeholder="Password"]').type('admin123')
      cy.get('[type="submit"]').click()
      cy.url().should('include', 'dashboard');
    })

    it('Verify User Cannot Login with wrong Credentials (Fast approach)', () => {
      cy.visit('/')
      cy.get('[src="/web/images/ohrm_branding.png?v=1711595107870"]').should('be.visible')
      cy.get('[placeholder="Username"]').type('Admin123')
      cy.get('[placeholder="Password"]').type('admin123')
      cy.get('[type="submit"]').click()
      cy.url().should('include', 'auth/login');
    })
  })
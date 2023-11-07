Cypress.Commands.add('gui_login', (
        email = Cypress.env('email'),
        password = Cypress.env('password'),
        { cacheSession = true } = {},
) => {
    const login = () => {
        cy.visit('/')
    
        cy.get("[data-testid='email']").type(email)
        cy.get("[data-testid='senha']").type(password, { log: false })
        cy.get("[data-testid='entrar']").click()
      }
    
      const validate = () => {
        cy.visit('/')
        cy.location('pathname', { timeout: 4000 }).should('not.eq', '/logout')
      }

      const options = {
        cacheAcrossSpecs: true,
        validate
      }

      if (cacheSession) {
        cy.session(email, login, options)
      } else {
        login()
      }

})
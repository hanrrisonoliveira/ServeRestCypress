describe('Login GUI test', () => {
    it('Sucessfully', () => {
        const email = Cypress.env('email')
        const password = Cypress.env('password')
        const options = { cacheSession: false }

        cy.gui_login(email, password, options)
        cy.get("[data-testid='logout']").should('be.visible')
    })
})
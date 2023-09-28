const API_URL = Cypress.env('API_URL')

Cypress.Commands.add('api_login', (login, failOnStatusCode = true) => {
    cy.request({
        method: 'POST',
        url: `${API_URL}/login`,
        body: {
          email: login.email,
          password: login.password
        },
        failOnStatusCode
      })
})

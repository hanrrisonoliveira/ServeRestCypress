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

Cypress.Commands.add('api_users', () => {
  cy.request({
    method: 'GET',
    url: `${API_URL}/usuarios`
  })
})

Cypress.Commands.add('api_products', () => {
  cy.request({
    method: 'GET',
    url: `${API_URL}/produtos`
  })
})

Cypress.Commands.add('api_register_products', (registerProducts) => {

  const login = {
    email: 'fulano@qa.com',
    password: 'teste'
  }

  cy.api_login(login)
    .then((response) => {
      const TOKEN = response.body.authorization;
      cy.request({
        method: 'POST',
        url: `${API_URL}/produtos`,
        headers: { authorization: TOKEN },
        body: {
          nome: registerProducts.nome,
          preco: registerProducts.preco,
          descricao: registerProducts.descricao,
          quantidade: registerProducts.quantidade
        }
      })
    })
})



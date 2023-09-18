const API_URL = Cypress.env('API_URL')

describe('Login test', { env: { hideCredentials: true } }, () => {
 
  it('Login successfully - 200', () => {
    
    cy.api({
      method: 'POST',
      url: `${API_URL}/login`,
      body: {
        email: 'fulano@qa.com',
        password: 'teste'
      }
    }).should(({status}) => {
      expect(status).to.equal(200)
    })

  })

  it('Login failure - 401', () => {
    cy.api({
      method: 'POST',
      url: `${API_URL}/login`,
      body: {
        email: 'email@gmail.com',
        password: '1234'
      },
      failOnStatusCode: false,
    }).should(({status,body}) => {
      expect(status).to.equal(401)
      expect(body).property('message', 'Email e/ou senha inválidos')
    })
  })
})
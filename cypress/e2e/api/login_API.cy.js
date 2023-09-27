describe('Login test', () => {

  it('Login successfully - 200', () => {
    const login = {
      email: 'fulano@qa.com',
      password: 'teste'
    }

    cy.api_login(login)
      .should(({ status }) => {
        expect(status).to.equal(200)
      })

  })

  it('Login failure - 401', () => {

    const login = {
      email: 'invalidemail@qa.com',
      password: 'error'
    }

    cy.api_login(login)
      .should(({ status, body }) => {
        expect(status).to.equal(401)
        expect(body).property('message', 'Email e/ou senha inválidos')
      })
  })
})
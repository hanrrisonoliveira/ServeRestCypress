const API_URL = Cypress.env('API_URL')

describe('Products test', () => {
    it('Get all products', () => {
        cy.api_products()
        .then(({ status, body }) => {
            expect(status).to.equal(200)
            expect(body.produtos.length)

            var arraylength = body.produtos.length
            cy.log('Array Length', arraylength)
            expect(body.produtos.length).to.be.eq(arraylength)

            for (let i = 0; i < arraylength; i++) {
                expect(body.produtos[i].administrador)
                cy.log('Name: ' + body.produtos[i].nome + ',' + ' Price: ' + body.produtos[i].preco)
            }
        })
    })
})
import { faker } from '@faker-js/faker';
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

    describe('Register products', () => {

        it('Sucessfully register products', () => { //Pode acontecer de tentar cadastrar o mesmo produto, devido a utilização do faker

            const registerProducts = {
                nome: faker.commerce.product(),
                preco: faker.commerce.price(),
                descricao: faker.commerce.productDescription(),
                quantidade: faker.number.int({ min: 1, max: 10 })
              }
    
            cy.api_register_products(registerProducts)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(response.body.message).to.equal('Cadastro realizado com sucesso')
            })
        })
    })
    

})
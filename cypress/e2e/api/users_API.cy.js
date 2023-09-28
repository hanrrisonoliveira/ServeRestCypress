const API_URL = Cypress.env('API_URL')

describe('Users test', () => {
    it('Search for all registered users', () => {
        cy.api_users()
        .then(({ status, body }) => {
            expect(status).to.equal(200)
            expect(body.usuarios.length)

            var arraylength = body.usuarios.length
            cy.log('Array Length', arraylength)
            expect(body.usuarios.length).to.be.eq(arraylength)

            for (let i = 0; i < arraylength; i++) {
                expect(body.usuarios[i].administrador)
                cy.log('Name: ' + body.usuarios[i].nome + ',' + ' Email: ' + body.usuarios[i].email)
            }
        })
    })

    it('Administrator users', () => {
        cy.api_users()
        .then(({ status, body }) => {
            expect(status).to.equal(200)
            expect(body.usuarios.length)

            var arraylength = body.usuarios.length
            cy.log('Array Length', arraylength)
            expect(body.usuarios.length).to.be.eq(arraylength)

            for (let i = 0; i < arraylength; i++) {
                expect(body.usuarios[i].administrador)
                if (body.usuarios[i].administrador === 'true') {
                    cy.log('Name: ' + body.usuarios[i].nome + ',' + ' Email: ' + body.usuarios[i].email)
                }
            }
        })
    })

    it('Non administrator users ', () => {
        cy.api_users()
        .then(({ status, body }) => {
            expect(status).to.equal(200)
            expect(body.usuarios.length)

            var arraylength = body.usuarios.length
            cy.log('Array Length', arraylength)
            expect(body.usuarios.length).to.be.eq(arraylength)

            for (let i = 0; i < arraylength; i++) {
                expect(body.usuarios[i].administrador)
                if (body.usuarios[i].administrador === 'false') {
                    cy.log('Name: ' + body.usuarios[i].nome + ',' + ' Email: ' + body.usuarios[i].email)
                }
            }
        })
    })
})
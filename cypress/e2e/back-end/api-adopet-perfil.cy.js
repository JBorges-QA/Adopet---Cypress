describe('Api Adopet - Endpoint /perfil', () =>{

    it('Retorno do endpoint /perfil', () =>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: {
                Authorization: Cypress.env("authorization"),
            }
        }).then((res) => {
            const bcryptRegex = /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/;
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('perfil');
            expect(res.body.perfil).to.have.property('nome');
            expect(res.body.perfil).to.have.property('email');
            expect(res.body.perfil).to.have.property('password');
            expect(res.body.perfil.nome).to.be.a('string').and.equal(Cypress.env("nome"));
            expect(res.body.perfil.email).to.be.a('string').and.equal(Cypress.env("email"));
            expect(res.body.perfil.password).to.match(bcryptRegex);
        })
    })

})
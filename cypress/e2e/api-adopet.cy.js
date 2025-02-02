describe('Api Adopet', () =>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTY0M2NkNi03MTEyLTQxNWItOTVkMi0wNzkwNGIwZDFhMWMiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTczODI4MDgyOCwiZXhwIjoxNzM4NTQwMDI4fQ.KgzevvZyDzckj85NVe0Sxkfek9Rm3fOsXYU1V-WJxao`

    it('Mensagens da API', () =>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('msg');
        })
    })

    it('Retorno do endpoint /perfil', () =>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil).to.have.property('nome');
            expect(res.body.perfil.nome).to.be.a('string').and.not.be.empty;
        })
    })
})
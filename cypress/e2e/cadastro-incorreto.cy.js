describe('Página de Cadastro', () => {
    it('preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
      // Acessando o formulário de cadastro
      cy.visit('https://adopet-tau.vercel.app/login');
      cy.get('[class="register__newUser"]').click();
      cy.get('button[type="submit"]').contains('Cadastrar').click();

      cy.contains('É necessário informar seu nome').should('be.visible')
      cy.contains('É necessário informar um endereço de email').should('be.visible')
      cy.contains('Crie uma senha').should('be.visible')
      cy.contains('Repita a senha criada acima').should('be.visible')
    })
  })
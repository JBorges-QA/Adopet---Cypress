describe('Pagina Principal', () => {
    beforeEach(() => {
        // Acessando a página inicial
        cy.visit('https://adopet-tau.vercel.app');
    })
  
    it('Testar botão "Ver pets disponíveis para adoção"', () => {
    
      // Clicando no botão - Utilizando a classe para clicar no botão
      cy.get('[class="button"]').click();
  
    })
  
    it('Testar botoões do cabeçalho', () =>{

  
      // Clicando no botão mensagens
      cy.get('[class="header__message"]').click();
  
      // Clicando no botão home
      cy.get('[class="header__home"]').click();
    })

    it('Verificar se o html possui "Boas-Vindas"', () => {
      cy.contains('Boas-vindas!').should('be.visible')
    })

    it('Verificar se o html possui "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"', () => {
      cy.contains("Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!").should('be.visible')
    })
  })
  
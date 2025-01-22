describe('Pagina Principal', () => {
    it('Visitar a página principal e clicar no botão "Ver pets disponíveis para adoção"', () => {
      // Acessando a página inicial
      cy.visit('https://adopet-tau.vercel.app');
    
      // Clicando no botão - Utilizando a classe para clicar no botão
      cy.get('[class="button"]').click();
  
    })
  
    it('Testar botoões do cabeçalho', () =>{
      // Acessando a página inicial
      cy.visit('https://adopet-tau.vercel.app');
  
      // Clicando no botão mensagens
      cy.get('[class="header__message"]').click();
  
      // Clicando no botão home
      cy.get('[class="header__home"]').click();
    })
  })
  
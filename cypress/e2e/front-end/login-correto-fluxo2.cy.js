describe('Login', () =>{
    beforeEach(() =>{
      // Acessando página inicial
      cy.visit('https://adopet-tau.vercel.app');

      cy.get('[class="header__message"]').click();
    })
  
    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () =>{  
  
      cy.login('anadejesus@gmail.com', 'Anadejesus123')
    })
  })
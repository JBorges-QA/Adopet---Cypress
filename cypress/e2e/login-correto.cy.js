describe('Login', () =>{
    beforeEach(() =>{
      // Acessando página inicial
      cy.visit('https://adopet-tau.vercel.app');

      // Clicando no botão de login
      cy.contains('a', 'Fazer login').click()
    })
  
    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () =>{

  
      
      
  
      // Preencher formulário de login
      cy.get('input[name="email"]').type('anadejesus@gmail.com')
      cy.get('input[name="password"]').type('Anadejesus123')
      cy.contains('button', 'Entrar').click()
  
    })
  })
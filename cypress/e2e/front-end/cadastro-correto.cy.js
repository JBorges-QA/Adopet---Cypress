describe('Página de Cadastro', () => {
  beforeEach(() => {
      // Acessando o formulário de cadastro
      cy.visit('https://adopet-tau.vercel.app/login');
      cy.get('[class="register__newUser"]').click();
  })
  
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

    cy.cadastro('Ana de Jesus', 'anadejesus@gmail.com', 'Anadejesus123');
  })
})





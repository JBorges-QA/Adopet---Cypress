describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    // Acessando o formulário de cadastro
    cy.visit('https://adopet-tau.vercel.app/login');
    cy.get('[class="register__newUser"]').click();

    // preenchendo formulário de cadastro
    cy.get('#name').type('Ana de Jesus');
    cy.get('#email').type('anadejesus@gmail.com');
    cy.get('#pass-create').type('Anadejesus123');
    cy.get('#pass-confirm').type('Anadejesus123');
    cy.get('button[type="submit"]').contains('Cadastrar').click();
  })
})





describe('template spec', () => {
  it('passes', () => {
    // Acessando o formulário de cadastro
    cy.visit('https://adopet-tau.vercel.app');
    cy.contains('a', 'Cadastrar').click();

    // preenchendo formulário de cadastro
    cy.get('input[name="name"]').type('Ana de Jesus');
    cy.get('input[name="email"]').type('anadejesus@gmail.com');
    cy.get('input[name="password"]').type('Anadejesus123');
    cy.get('input[name="confirm_password"]').type('Anadejesus123');
    cy.contains('button', 'Cadastrar').click();
  })
})
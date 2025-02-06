describe('Pagina de login', () => {
    beforeEach(() => {
      // Acessando página inicial
      cy.visit('https://adopet-frontend-cypress.vercel.app');

      // Clicando no botão de login
      cy.contains('a', 'Fazer login').click();

      cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode:400,}).as('stubPost')
    });

    it('Realizado login incorreto', () => {
        cy.contains('button', 'Entrar').click();
        cy.contains('É necessário informar um endereço de email').should('be.visible');
        cy.contains('Insira sua senha').should('be.visible');
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () =>{
        cy.login('anadejesus@gmail.com', 'Anadejesus123');
        cy.wait('@stubPost')
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })
})
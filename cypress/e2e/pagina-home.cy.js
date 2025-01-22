describe('Home', () => {
    it('Acessar /home e Clicar no botão "Falar com responsável', () =>{
      // Acessando o diretório /home
      cy.visit('https://adopet-tau.vercel.app/home')
  
      // clicando no botão "Falar com o responsável"
      cy.get('[class="card"]' )
      .contains('Dunga')
      .parents('[class="card"]')
      .find('[class="card__contact"]')
      .click();
    });
  })
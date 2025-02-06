describe('Home', () => {
    beforeEach(() =>{
        // Acessando o diretório /home
        cy.visit('https://adopet-tau.vercel.app/home')
    })
  
    it('Testar botão "Falar com responsável', () =>{

      // clicando no botão "Falar com o responsável"
      cy.get('[class="card"]' )
      .contains('Dunga')
      .parents('[class="card"]')
      .find('[class="card__contact"]')
      .click();
    });

    it('verificar se o title com o texto “AdoPet” está presente no html.', () => {
      cy.title().should('eq', 'AdoPet')
    })

    it('Verificar se as imagens dos pets estão visiveis', () =>{

      cy.get('div.cards img[src$=".png"]').each(($img) =>{
        cy.wrap($img).should('be.visible');
      })

    })
  })
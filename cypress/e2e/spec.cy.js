describe('Cadastro', () => {
  it('Realizar um cadastro no site com sucesso', () => {
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

describe('Login', () =>{
  it('Realizar login com sucesso', () =>{
    // Acessando página inicial
    cy.visit('https://adopet-tau.vercel.app');

    // Clicando no botão de login
    cy.contains('a', 'Fazer login').click()

    // Preencher formulário de login
    cy.get('input[name="email"]').type('anadejesus@gmail.com')
    cy.get('input[name="password"]').type('Anadejesus123')
    cy.contains('button', 'Entrar').click()

  })
})

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
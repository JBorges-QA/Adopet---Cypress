Cypress.Commands.add('login', (email, senha) => { 
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(senha);
    cy.contains('button', 'Entrar').click();
 });

 Cypress.Commands.add('cadastro', (nome, email, senha) =>{
    cy.get('#name').type(nome);
    cy.get('#email').type(email);
    cy.get('#pass-create').type(senha);
    cy.get('#pass-confirm').type(senha);
    cy.get('button[type="submit"]').contains('Cadastrar').click();
 } )

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

//('',()=>{})
  

  
Given('que o usuário acesse o portal webtables',() => {
    cy.acessarPortal()
});

When('ele clica no botao add e acessa o formulário de cadastro',()=>{
    cy.acessarFormulario()
})
  
And('preenche todos os campos obrigatórios com dados válidos e clica no botão submit',()=>{
    cy.preencheDadosPessoais()
})


Then('os dados devem aparecer na última linha da tabela',()=>{
    cy.validaLinhaComNomeMaria()
})
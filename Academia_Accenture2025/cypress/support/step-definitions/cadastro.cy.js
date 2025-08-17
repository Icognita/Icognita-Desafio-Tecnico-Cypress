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

//Editar cadastro
Then("o usuário clica no botão  editar e faz alteração o nome do usuário",()=>{
    cy.editarRegistro()
} )

 And('os  dados alterados  deve aparecer na tabela',()=>{
    cy.validarAposAlteracao()
 })

 When('o usuário clica no botão excluir  registro',()=>{
    cy.excluirRegistro()
 })

 Then('o registro não deve mais aparecer na tabela',()=>{
     cy.validarExclusaoRegistro3()
 })
//email campo invalido

 And('o usuário preenche todos os campos obrigatórios, mas insere letras nos campos "Idade" e "Salário", e clica no botão "Submit"',()=>{
    cy.preencheDadosPessoaisEmailInvalidos()
 })

 Then('o campo de e-mail deve exibir uma borda vermelha indicando erro',()=>{
    cy.campoEmailInvalidos()
 })
 
And('o usuário deixe todos os campos obrigatórios vazios e clica no botão "Submit"',()=> {
  cy.deixarCamposVazio()
});

Then('os campos devem ser exibidos com bordas vermelhas indicando erro',()=> {
  cy.validarCadastroVazio()
});

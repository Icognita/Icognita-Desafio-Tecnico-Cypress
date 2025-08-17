Cypress.Commands.add("preencheFormulario", (dados) => {
  cy.get(userPrimeiroNome).type(dados.primeiroNome);
  cy.get(userSegundoNome).type(dados.segundoNome);
  cy.get(userEmail).type(dados.email);
  cy.get(userIdade).type(dados.idade);
  cy.get(userSalario).type(dados.salario);
  cy.get(userDepartamento).type(dados.departamento);
  cy.get(btnSubmit).click();
});
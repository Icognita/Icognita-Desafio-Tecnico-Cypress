


const btnAdd           ="#addNewRecordButton"
const userPrimeiroNome ="#firstName"
const userSegundoNome  ="#lastName"
const userEmail        ="#userEmail"
const userIdade        ="#age"
const userSalario      ="#salary"
const userDepartamento ="#department"
const btnSubmit        ="#submit"


Cypress.Commands.add("acessarPortal", () => {
    cy.visit('/')
})

Cypress.Commands.add("acessarFormulario", () => {  
    cy.get(btnAdd).click()  
})
Cypress.Commands.add("preencheDadosPessoais",()=>{
  
    cy.get(userPrimeiroNome).type("Maria")
    cy.get(userSegundoNome).type("Jubilina")
    cy.get(userEmail).type(Cypress.env('email')) 
    cy.get(userIdade).type("80")
    cy.get(userSalario).type("10000")
    cy.get(userDepartamento).type("Qa")
    cy.get(btnSubmit).click()
})

Cypress.Commands.add("validaLinhaComNomeMaria", () => {
  cy.get('.rt-tbody .rt-tr-group',{timeout: 10000})
    .should('contain', 'Maria') 
    .contains('Maria')
    .closest('.rt-tr-group')
    .within(() => {
      cy.get('.rt-td').eq(0).should('contain', 'Maria')   
    })
})

Cypress.Commands.add("editarRegistro", () => {
  cy.get('#edit-record-3').click()
  cy.get('#firstName').clear().type('vitória')
  cy.get('#submit').click()
})
           
Cypress.Commands.add("validarAposAlteracao", () => {
  cy.get('.rt-tbody .rt-tr-group',{timeout: 10000})
    .should('contain', 'vitória') 
    .contains('vitória')
    .closest('.rt-tr-group')
    .within(() => {
      cy.get('.rt-td').eq(0).should('contain', 'vitória')   
    })
})
   
Cypress.Commands.add("excluirRegistro", () => {
  cy.get('#delete-record-3').click()
})
Cypress.Commands.add("validarExclusaoRegistro3", () => {
  cy.get('.rt-tr-group').should('not.contain', 'mirian@teste.com')
})


//validação email
Cypress.Commands.add("preencheDadosPessoaisEmailInvalidos",()=>{
    cy.get(userPrimeiroNome).type("Maria")
    cy.get(userSegundoNome).type("Jubilina")
    cy.get(userEmail).type(Cypress.env('emailInvalido')) 
    cy.get(userIdade).type("80")
    cy.get(userSalario).type("10000")
    cy.get(userDepartamento).type("Qa")
    cy.get(btnSubmit).click()
})


Cypress.Commands.add("campoEmailInvalidos", () => {
  cy.get('#userEmail')
  .invoke('css', 'border-bottom-color')
  .should('eq', 'rgb(220, 53, 69)')
})




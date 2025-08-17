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
    cy.log()
  cy.get('.rt-tbody .rt-tr-group')
    .contains('Maria')
    .parent()
    .within(() => {
      cy.get('.rt-td').eq(0).should('contain', 'Maria')
      cy.get('.rt-td').eq(1).should('contain', 'Jubilina')
      cy.get('.rt-td').eq(2).should('contain', Cypress.env('email'))
      cy.get('.rt-td').eq(3).should('contain', '80')
      cy.get('.rt-td').eq(4).should('contain', '10000')
      cy.get('.rt-td').eq(5).should('contain', 'Qa')
    })
})
                
   

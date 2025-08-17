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
  // const email = `maria_${Date.now()}@teste.com`
  // Cypress.env('email', email) 
  // cy.log(`📧 Email usado: ${email}`)

    cy.get(userPrimeiroNome).type("Maria")
    cy.get(userSegundoNome).type("Jubilina")
    cy.get(userEmail).type(Cypress.env('email')) 
    cy.get(userIdade).type("80")
    cy.get(userSalario).type("10000")
    cy.get(userDepartamento).type("Qa")
    cy.get(btnSubmit).click()
})


Cypress.Commands.add("validaLinhaComNomeMaria", () => {
  cy.get('.rt-tbody .rt-tr-group')
    .should('contain', 'Maria') // garante que carregou
    .contains('Maria')
    .closest('.rt-tr-group')
    .within(() => {
      cy.get('.rt-td').eq(0).should('contain', 'Maria')   
    })
})
                
   

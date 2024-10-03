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

Cypress.Commands.add('login', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
    cy.get('#email').type('brian@test.com')
    cy.get('#password').type('1234567')
    cy.get('#submit').click()
})

Cypress.Commands.add('addContact', (random) => {
    cy.get('#add-contact').click()
      cy.get('#firstName').type('Test' + random)
      cy.get('#lastName').type('User')
      cy.get('#birthdate').type('2000-01-02')
      cy.get('#email').type('foo@bar.com')
      cy.get('#phone').type('8005551212')
      cy.get('#street1').type('123 Fake Str.')
      cy.get('#street2').type('Apt. 222')
      cy.get('#city').type('Covington')
      cy.get('#stateProvince').type('WA')
      cy.get('#postalCode').type('98042')
      cy.get('#country').type('USA')
      cy.get('#submit').click()

})

Cypress.Commands.add('deleteContact', () => {
    cy.get('#delete').click()
    cy.on('window:confirm', () => true)
})
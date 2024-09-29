describe('Delete Contact Tests', () => {
    it('Can Delete a contact', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.visit('https://thinking-tester-contact-list.herokuapp.com/')
      cy.get('#email').type('brian@test.com')
      cy.get('#password').type('1234567')
      cy.get('#submit').click()
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

      cy.contains('Test' + random + ' User').click()
      cy.get('#delete').click()
      cy.on('window:confirm', () => true)
      cy.get('.contactTableBodyRow').contains('Test' + random + ' User').should('not.exist')
      
      

    })
  })
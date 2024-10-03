describe('Add Contact Tests', () => {
    it('Can add a new contact', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.login()
      cy.addContact(random)

      cy.contains('Test' + random + ' User').click()
      cy.get('#firstName').should('contain', `Test${random}`)
      cy.get('#lastName').should('contain', 'User')
      cy.get('#birthdate').should('contain', '2000-01-02')
      cy.get('#email').should('contain', 'foo@bar.com')
      cy.get('#phone').should('contain', '8005551212')
      cy.get('#street1').should('contain', '123 Fake Str.')
      cy.get('#street2').should('contain', 'Apt. 222')
      cy.get('#city').should('contain', 'Covington')
      cy.get('#stateProvince').should('contain', 'WA')
      cy.get('#postalCode').should('contain', '98042')
      cy.get('#country').should('contain', 'USA')

      cy.deleteContact()

      //cy.get('#delete').click()
      //cy.on('window:confirm', () => true)
      
      

    })
  })
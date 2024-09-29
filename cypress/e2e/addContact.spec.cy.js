describe('Add Contact Tests', () => {
    it('Can add a new contact', () => {

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

      cy.get('#delete').click()
      cy.on('window:confirm', () => true)
      
      

    })
  })
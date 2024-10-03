describe('Update Contact Tests', () => {
    xit('Can update a contact', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.login()
      cy.addContact(random)

      cy.contains('Test' + random + ' User').click()
      cy.get('#edit-contact').click()
      cy.get('#firstName').clear().type('Update' + random)
      cy.get('#lastName').clear().type('Person')
      cy.get('#birthdate').clear().type('2001-02-03')
      cy.get('#email').clear().type('bar@foo.com')
      cy.get('#phone').clear().type('8005882300')
      cy.get('#street1').clear().type('3230 Hawkins Ave')
      cy.get('#street2').clear().type('Apt 333')
      cy.get('#city').clear().type('Ketchikan')
      cy.get('#stateProvince').clear().type('AK')
      cy.get('#postalCode').clear().type('99901')
      cy.get('#country').clear().type('United States')
      cy.get('#submit').click()
      cy.get('#return').click()

      cy.contains('Update' + random + ' Person').click()
      cy.get('#firstName').should('contain', `Update${random}`)
      cy.get('#lastName').should('contain', 'Person')
      cy.get('#birthdate').should('contain', '2001-02-03')
      cy.get('#email').should('contain', 'bar@foo.com')
      cy.get('#phone').should('contain', '8005882300')
      cy.get('#street1').should('contain', '3230 Hawkins Ave')
      cy.get('#street2').should('contain', 'Apt 333')
      cy.get('#city').should('contain', 'Ketchikan')
      cy.get('#stateProvince').should('contain', 'AK')
      cy.get('#postalCode').should('contain', '99901')
      cy.get('#country').should('contain', 'United States')

      cy.deleteContact()

    })

    it('Returns error when birthdate validation failed', () => {

        let random = Math.floor(Math.random() * 1000)

        cy.login()
        cy.addContact(random)

        cy.contains('Test' + random + ' User').click()
        cy.get('#edit-contact').click()
        cy.get('#birthdate').clear().type('02-03-2001')
        cy.get('#submit').click()
        cy.get('#error').should('contain', 'Birthdate is invalid')

        cy.get('#cancel').click()

        cy.deleteContact()


    })


  })
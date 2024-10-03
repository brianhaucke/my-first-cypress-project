describe('Delete Contact Tests', () => {
    it('Can Delete a contact', () => {

      let random = Math.floor(Math.random() * 1000)

      cy.login()
      cy.addContact(random)

      cy.contains('Test' + random + ' User').click()
      cy.deleteContact()
      
    //   cy.get('#delete').click()
    //   cy.on('window:confirm', () => true)
    

      cy.get('.contactTableBodyRow').contains('Test' + random + ' User').should('not.exist')
      
      

    })
  })
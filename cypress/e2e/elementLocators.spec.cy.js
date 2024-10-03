describe('Element Locator Practice', ()=> {
    it('Can locate an element six different ways', ()=>{

        cy.visit('https://thinking-tester-contact-list.herokuapp.com')

        //locate an element by id
        cy.get('#email').type('brian@test.com')

        //locate an element by text
        cy.get("[type ='password']").type('1234567')

        cy.contains('Submit').click()

        //locate element by class
        cy.get('.logout').click()

        //locate an element by css
        cy.get('input').first().type('brian@test.com')

        //locate an element by xpath - if xpath is supported
        //cy.get('//form/p[2]/input').type('1234567')

        //locate an element by automation id - (this app does have any automation ids)
        //<button id="submit" data-cy="submit">Submit</button>
        //cy.get('[data-cy="submit"]').click()

    })
})
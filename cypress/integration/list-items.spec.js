describe('List items', () => {
    beforeEach(() => {
        cy.seedAndVisit()
    })

    it.only('properly displays completed items', () => {
        cy.get('.todo-list li')
            .filter('.completed')
            .should('have.length', 1)
            .and('contain', 'Eggs')
            .find('.toggle')
            .should('be.checked')
    })
})
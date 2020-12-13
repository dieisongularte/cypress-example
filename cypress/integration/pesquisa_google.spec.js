describe('Pesquisa Google', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com.br/')
    })
    it('Pesquisar Digital Innovation One', () => {
        cy.get('.gLFyf')
          .type('Digital Innovation One')
          .type('{enter}')
        cy.contains('Digital Innovation One')
          .click({ force: true })
        cy.title()
          .should('contain', 'Cursos grátis de tecnologia e inovação | Digital Innovation On')
    })
})
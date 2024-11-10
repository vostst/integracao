class Contact{
    preencherContact() {
      cy.get(`.contact-form h2`)
        .should('be.visible')
        .and('have.text', 'Get In Touch')
  
      cy.get('[data-qa="name"]').type(`Tester`)
      cy.get('[data-qa="email"]').type(`tester-qa@mail.com`)
      cy.get('[data-qa="subject"]').type(`Test Automation`)
      cy.get('[data-qa="message"]').type(`Learning Test Automation`)
  
      cy.fixture('example.json').as('arquivo')
      cy.get('input[name="upload_file"]').selectFile('@arquivo')
  
      cy.get('[data-qa="submit-button"]').click()
    }


}

export default new Contact()

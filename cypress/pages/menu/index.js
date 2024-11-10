class Menu {
    irParaProdutos() {
        cy.contains(`Products`).click()

        return this
    }

    irParaLoginCadastro() {
        cy.contains('Signup').click()

        return this
    }

    irParaContactUs() {
        cy.contains(`Contact us`).click()

        return this
    }
}

export default new Menu()
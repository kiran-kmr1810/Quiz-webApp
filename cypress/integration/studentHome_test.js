describe("Functionality of Student of Home Page", () => {
    it("Student About Page Rendition", () => {
        cy.visit("/")
        cy.get('#email').clear();
        cy.get('#email').type('dharshulion@gmail.com');
        cy.get('#field-5').clear();
        cy.get('#field-5').type('charlie');
        cy.get('.css-oc8wbp').click();
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[href="/about"] > .chakra-button').click();
        cy.get('.chakra-button').click();
        /* ==== End Cypress Studio ==== */
    })
})

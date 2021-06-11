describe("Taking Up the Quiz", () => {
    it("Attending Quiz", () => {
        cy.visit("/")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#email').clear();
        cy.get('#email').type('dharshulion@gmail.com');
        cy.get('#field-5').clear();
        cy.get('#field-5').type('charlie');
        cy.get('.css-oc8wbp').click();
        cy.get('#popover-trigger-279 > h5.css-ekzu1y').click();
        cy.get('.startQuizBtn').click();
        cy.get('.questionWrapperBody > :nth-child(7)').click();
        cy.get('.nextQuestionBtn').click();
        cy.get('.questionWrapperBody > :nth-child(8)').click();
        cy.get('.nextQuestionBtn').click();
        cy.get('.questionWrapperBody > :nth-child(6)').click();
        cy.get('.nextQuestionBtn').click();
        cy.get('.questionWrapperBody > :nth-child(5)').click();
        cy.get('.nextQuestionBtn').click();
        cy.get('.chakra-button').click();
        /* ==== End Cypress Studio ==== */
    })
})
describe("Faculty must be able to navigate to creation of  new quiz",()=>{
    it("Faculty Home Page rendered correctly",()=>{
        cy.visit("/fhome");
        /* ==== Generated with Cypress Studio ==== */
        cy.wait(5000)
        cy.get('.chakra-button').click();
        cy.url().should('contain','/createquiz')
        /* ==== End Cypress Studio ==== */
    })
})
describe("Faculty must be able to set Quiz Attributes", () => {
    it("Faculty must be able to set the headers", () => {
        cy.visit("/createquiz")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.css-tbu835 > :nth-child(1) > .chakra-input').clear();
        cy.get('.css-tbu835 > :nth-child(1) > .chakra-input').type('COMPUTER SCIENCE');
        cy.get('.css-tbu835 > :nth-child(2) > .chakra-input').clear();
        cy.get('.css-tbu835 > :nth-child(2) > .chakra-input').type('Mock Quiz on fundamentals of CS Grade');
        cy.get(':nth-child(3) > .chakra-input').clear();
        cy.get(':nth-child(3) > .chakra-input').type('15CSE311');
        cy.get(':nth-child(4) > .chakra-input').clear();
        cy.get(':nth-child(4) > .chakra-input').type('Software Engineering');
        cy.get(':nth-child(5) > .chakra-input').clear();
        cy.get(':nth-child(5) > .chakra-input').type('2021/06/10');
        cy.get(':nth-child(6) > .chakra-input').clear();
        cy.get(':nth-child(6) > .chakra-input').type('10:00');
        cy.get(':nth-child(7) > .chakra-input').clear();
        cy.get(':nth-child(7) > .chakra-input').type('10:20');
        cy.get(':nth-child(8) > .chakra-input').clear();
        cy.get(':nth-child(8) > .chakra-input').type('20');
        /* ==== End Cypress Studio ==== */
    })
})


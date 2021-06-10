describe("Renders the login page",()=>{
    it("Renders Correctly",()=>{
        cy.visit("/")
    })  
    it("Validating Admin's credentials",()=>{
        cy.visit("/")
        cy.get('#email').clear();
        cy.get('#email').type('admin@admin.com');
        cy.get('#field-5').clear();
        cy.get('#field-5').type('123456');
        cy.get('.css-oc8wbp').click();
    })

    it("Validating Student's credentials",()=>{
        cy.visit("/")
        cy.get('#email').clear();
        cy.get('#email').type('dharshulion@gmail.com');
        cy.get('#field-5').clear();
        cy.get('#field-5').type('charlie');
        cy.get('.css-oc8wbp').click();
    })

    it("Validating Faculty's credentials",()=>{
        cy.visit("/")
        cy.get('#email').clear();
        cy.get('#email').type('sandhya101001@gmail.com');
        cy.get('#field-5').clear();
        cy.get('#field-5').type('sandhya123');
        cy.get('.css-oc8wbp').click();
    })
})

describe("Boundary Edge Cases",()=>{
    it("Forget Password Mechanism",()=>{
        cy.visit("/")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#email').clear();
        cy.get('#email').type('hayma.padmanaban@gmail.com');
        cy.get('#field-5').click();
        cy.get('.css-1u8qly9 > .chakra-button').click();
        cy.get('#chakra-modal--body-6 > .chakra-input').clear();
        cy.get('#chakra-modal--body-6 > .chakra-input').type('hayma.padmanaban@gmail.com');
        cy.get('.css-1i5oup5').click();
        /* ==== End Cypress Studio ==== */
    })
})

describe("Negative edge cases",()=>{
    it("Should not allow a non-user",()=>{
        cy.visit("/")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#email').clear();
        cy.get('#email').type('aadhithyatejaswin@gmail.com');
        cy.get('#field-5').clear();
        cy.get('#field-5').type('aadhi123');
        cy.get('.css-oc8wbp').click();
        /* ==== End Cypress Studio ==== */
    })
    it("Should not accept incorrect password",()=>{
        cy.visit("/")
        cy.get('#email').clear();
        cy.get('#email').type('dharshulion@gmail.com');
        cy.get('#field-5').clear();
        cy.get('#field-5').type('dharsan123');
        cy.get('.css-oc8wbp').click();
    })
})
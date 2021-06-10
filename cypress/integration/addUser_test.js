describe("Should be able to add a Student consistently",()=>{
    it("Admin Page rendered correctly",()=>{
        cy.visit("/admin")
    })
    it("Add a new student to the database",()=>{
        cy.visit("/admin")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#email').clear();
        cy.get('#email').type('hayma.padmanaban@gmail.com');
        cy.get('#password').clear();
        cy.get('#password').type('hayma123');
        cy.get('#imgl').clear();
        cy.get('#imgl').type('1Q1I-VLl2lhJ5uE63PUAUU5vIuJYcC2Ry');
        cy.get('#Name').clear();
        cy.get('#Name').type('Hayma Sunder');
        cy.get('#role').select('Student');
        cy.get('#id').clear();
        cy.get('#id').type('CSE18425');
        cy.get('#phone').clear();
        cy.get('#phone').type('6380912417');
        cy.get('#class').clear();
        cy.get('#class').type('CSE E');
        cy.get('.chakra-button').click();
        /* ==== End Cypress Studio ==== */
    })
})

describe("Should be able to add a Faculty consistently",()=>{
    it("Admin Page rendered correctly",()=>{
        cy.visit("/admin")
    })
    it("Add a new faculty to the database",()=>{
        cy.visit("/admin")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#email').clear();
        cy.get('#email').type('phanindra80061@gmail.com');
        cy.get('#password').clear();
        cy.get('#password').type('phani123');
        cy.get('#imgl').clear();
        cy.get('#imgl').type('14u8rlTMFARomYNMFtxa1YcLCmrzAzEOx');
        cy.get('#Name').clear();
        cy.get('#Name').type('Phanindra Reddy');
        cy.get('#role').select('Faculty');
        cy.get('#id').clear();
        cy.get('#id').type('CSE18433');
        cy.get('#phone').clear();
        cy.get('#phone').type('9177956888');
        cy.get('#class').clear();
        cy.get('#class').type('CSE E');
        cy.get('.chakra-button').click();
        /* ==== End Cypress Studio ==== */
    })
})

describe("Should be able to Logout from current login",()=>{
    it("Logout Functionality Working Fine",()=>{
        cy.visit("/admin")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#menu-button-3').click();
        cy.get('#menuitem-1').click();
        /* ==== End Cypress Studio ==== */
    })
})
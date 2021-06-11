describe("Faculty Setting a Quiz",()=>{
    it("Faculty Home Page rendered corrctly",()=>{
        cy.visit("/");
        cy.visit("/fhome")
        cy.wait(3000);
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.chakra-button').click();
        cy.get('.css-tbu835 > :nth-child(1) > .chakra-input').clear();
        cy.get('.css-tbu835 > :nth-child(1) > .chakra-input').type('Computer Science');
        cy.get('.css-tbu835 > :nth-child(2) > .chakra-input').clear();
        cy.get('.css-tbu835 > :nth-child(2) > .chakra-input').type('Third Year Quiz of Fundamentals of Computer Science');
        cy.get(':nth-child(3) > .chakra-input').clear();
        cy.get(':nth-child(3) > .chakra-input').type('15CSE111');
        cy.get(':nth-child(4) > .chakra-input').clear();
        cy.get(':nth-child(4) > .chakra-input').type('Algorithms and Data Structures');
        cy.get(':nth-child(5) > .chakra-input').clear();
        cy.get(':nth-child(5) > .chakra-input').type('2021/06/10');
        cy.get(':nth-child(6) > .chakra-input').clear();
        cy.get(':nth-child(6) > .chakra-input').type('08:00');
        cy.get(':nth-child(7) > .chakra-input').clear();
        cy.get(':nth-child(7) > .chakra-input').type('08:30');
        cy.get(':nth-child(8) > .chakra-input').clear();
        cy.get(':nth-child(8) > .chakra-input').type('30');
        cy.get('[name="question"]').clear();
        cy.get('[name="question"]').type('What is the complexity of Longest Increasing Subsequence?');
        cy.get('[name="oa"]').clear();
        cy.get('[name="oa"]').type('O(n)');
        cy.get('[name="ob"]').clear();
        cy.get('[name="ob"]').type('O(nlogn)');
        cy.get('[name="oc"]').clear();
        cy.get('[name="oc"]').type('O(logn)');
        cy.get('[name="od"]').clear();
        cy.get('[name="od"]').type('O(2^n)');
        cy.get('.css-89si8u').clear();
        cy.get('.css-89si8u').type('2');
        cy.get('[name="explanation"]').clear();
        cy.get('[name="explanation"]').type('The LCS problem is solvable in time of O(nlogn) where n denotes the length of the input sequence.');
        cy.get('[name="point"]').clear();
        cy.get('[name="point"]').type('5');
        cy.get('.css-1a1r6z1').click();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="question"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="question"]').type('Number of edges of tree with n nodes is ___?');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oa"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oa"]').type('n^2');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="ob"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="ob"]').type('n');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oc"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oc"]').type('n*(n-1)/2');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="od"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="od"]').type('n-1');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > .css-89si8u').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > .css-89si8u').type('4');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="explanation"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="explanation"]').type('Tree with n vertices has n-1 edges. We could define trees as a connected graph with n-1 edges without cycles.');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="point"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="point"]').type('3');
        cy.get('.css-1a1r6z1').click();
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="question"]').clear();
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="question"]').type('Which among the following is a programming language?');
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oa"]').clear();
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oa"]').type('Python');
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="ob"]').clear();
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="ob"]').type('Anaconda');
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oc"]').clear();
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oc"]').type('Viper');
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="od"]').clear();
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="od"]').type('King Cobra');
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > .css-89si8u').click();
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > .css-89si8u').clear();
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > .css-89si8u').type('1');
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="explanation"]').clear();
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="explanation"]').type('Python is a general purpose programming language.');
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="point"]').clear();
        cy.get(':nth-child(3) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="point"]').type('2');
        cy.get('.css-1a1r6z1').click();
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="question"]').clear();
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="question"]').type('Activity Selection problem comes under which category?');
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oa"]').clear();
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oa"]').type('Dynamic Programming');
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="ob"]').clear();
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="ob"]').type('Greedy');
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oc"]').clear();
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oc"]').type('Brute Force');
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="od"]').clear();
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="od"]').type('Graph');
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > .css-89si8u').clear();
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > .css-89si8u').type('2');
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="explanation"]').clear();
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="explanation"]').type('Self Explanatory.');
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="point"]').clear();
        cy.get(':nth-child(4) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="point"]').type('2');
        cy.get('.css-1a1r6z1').click();
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="question"]').clear();
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="question"]').type('Can a Linked List be implemented using Stacks?');
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oa"]').clear();
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oa"]').type('YES');
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="ob"]').clear();
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="ob"]').type('NO');
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oc"]').clear();
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oc"]').type('Maybe');
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="od"]').clear();
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="od"]').type('Data Insufficient');
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > .css-89si8u').clear();
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > .css-89si8u').type('1');
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="explanation"]').clear();
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="explanation"]').type('Linked List can be implemented using two stacks with one stack as a temporary one.');
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="point"]').clear();
        cy.get(':nth-child(5) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="point"]').type('3');
        cy.get('.css-d85ps1 > .chakra-button').click();
        /* ==== End Cypress Studio ==== */
    })
})
describe("Working of Delete Functionality", ()=> {
    it("Faculty Home Page Renders Correctly", () => {
        cy.visit("/");
        cy.visit("/fhome")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('.chakra-button').click();
        cy.get('.css-tbu835 > :nth-child(1) > .chakra-input').clear();
        cy.get('.css-tbu835 > :nth-child(1) > .chakra-input').type('Basic Mathematics');
        cy.get('.css-tbu835 > :nth-child(2) > .chakra-input').clear();
        cy.get('.css-tbu835 > :nth-child(2) > .chakra-input').type('High Scchool maths');
        cy.get('.css-tbu835 > :nth-child(2) > .chakra-input').clear();
        cy.get('.css-tbu835 > :nth-child(2) > .chakra-input').type('High School maths');
        cy.get(':nth-child(3) > .chakra-input').clear();
        cy.get(':nth-child(3) > .chakra-input').type('15CSE121');
        cy.get(':nth-child(4) > .chakra-input').clear();
        cy.get(':nth-child(4) > .chakra-input').type('Addition');
        cy.get(':nth-child(5) > .chakra-input').clear();
        cy.get(':nth-child(5) > .chakra-input').type('2021/06/10');
        cy.get(':nth-child(6) > .chakra-input').clear();
        cy.get(':nth-child(6) > .chakra-input').type('08:00');
        cy.get(':nth-child(7) > .chakra-input').clear();
        cy.get(':nth-child(7) > .chakra-input').type('08:30');
        cy.get(':nth-child(8) > .chakra-input').clear();
        cy.get(':nth-child(8) > .chakra-input').type('30');
        cy.get('.css-nyvvp7').click();
        cy.get('[name="question"]').clear();
        cy.get('[name="question"]').type('1+2= _ ?');
        cy.get('[name="oa"]').clear();
        cy.get('[name="oa"]').type('4');
        cy.get('[name="ob"]').clear();
        cy.get('[name="ob"]').type('1');
        cy.get('[name="oc"]').clear();
        cy.get('[name="oc"]').type('3');
        cy.get('[name="od"]').clear();
        cy.get('[name="od"]').type('12');
        cy.get('.css-89si8u').clear();
        cy.get('.css-89si8u').type('3');
        cy.get('[name="explanation"]').clear();
        cy.get('[name="explanation"]').type('1+2=3');
        cy.get('[name="point"]').clear();
        cy.get('[name="point"]').type('10');
        cy.get('.css-1a1r6z1').click();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="question"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="question"]').type('Integration of x2?');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oa"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oa"]').type('x');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="ob"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="ob"]').type('2x');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oc"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oc"]').type('x3/3');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oc"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="oc"]').type('x^3/3');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="od"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(1) > [name="od"]').type('x^2');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > .css-89si8u').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > .css-89si8u').type('3');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="explanation"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="explanation"]').type('Right Answer');
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="point"]').clear();
        cy.get(':nth-child(2) > .css-jdl72h > .css-nyvvp7 > .chakra-stack > :nth-child(2) > [name="point"]').type('10');
        cy.get(':nth-child(2) > .css-jdl72h > .chakra-button').click();
        cy.get('.css-d85ps1 > .chakra-button').click();
        /* ==== End Cypress Studio ==== */
    })
})

describe("Faculty Logout Functionality", () => {
    it("Testing the logout button", () => {
        cy.visit("/");
        cy.visit("/fhome")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#menu-button-3').click();
        cy.get('#menuitem-1').click();
        /* ==== End Cypress Studio ==== */
    })
})
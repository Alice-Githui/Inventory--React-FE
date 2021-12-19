const CPLATTERS = Cypress.env("platters")
const Bottles = Cypress.env("bottles")
const nyama = Cypress.env("nyama")

describe("renders the homepage", () => {
    beforeEach(()=>{
        cy.visit("/")
    })

    it("renders correctly", () =>{
        cy.visit("/")
        cy.get(".getAll").should("exist")
    });

    // it("allows the user to view one item and update the quantity", () =>{
    //     cy.visit("/product/33")
    //     cy.findByText(CPLATTERS).should("exist")
    //     /* ==== Generated with Cypress Studio ==== */
    //     cy.get('input').clear();
    //     cy.get('input').type('10');
    //     cy.get(':nth-child(4) > :nth-child(1) > div > a > button').click();
    //     /* ==== End Cypress Studio ==== */
    // });
    // it("allows you to view one item and delete it from the products list", () => {
    //     cy.visit("/product/50")
    //     cy.findByText(nyama).should("exist")
    //     /* ==== Generated with Cypress Studio ==== */
    //     cy.get(':nth-child(5) > :nth-child(1) > div > button').click();
    //     /* ==== End Cypress Studio ==== */
    // })
    it("allows the user to enter product information", () =>{
        cy.visit("/product/new")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#name').clear();
        cy.get('#name').type('Nyama platters');
        cy.get('#quantity').clear();
        cy.get('#quantity').type('2');
        cy.get('#buyingPrice').clear();
        cy.get('#buyingPrice').type('2000');
        cy.get('#sellingPrice').clear();
        cy.get('#sellingPrice').type('3000');
        cy.get('#description').clear();
        cy.get('#description').type('Holiday nyama platters');
        cy.get('.update-form > button').click();
        /* ==== End Cypress Studio ==== */
    });
    it("allows you to sell one item from inventory and reduces quantity", () =>{
        cy.visit("/product/sell/28")
        cy.findByText(Bottles).should("exist")
        cy.findAllByText(Bottles).click()

        /* ==== Generated with Cypress Studio ==== */
        cy.get('input').clear();
        cy.get('input').type('2');
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > div > button').click();
        /* ==== End Cypress Studio ==== */
    });

})



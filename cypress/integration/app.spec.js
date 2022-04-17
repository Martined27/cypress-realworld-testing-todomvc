describe("React TodoMVC",() => {
    const todo_item_1= 'Buy Milk'
    const todo_item_2= 'Buy Honey'
    const todo_item_3= 'Buy Satoshi'

    beforeEach(() => {
    cy.visit("http://localhost:8888")
   });
   
    it('adds a single todo', () => {
        cy.get(".new-todo").type(`${todo_item_1}{enter}`)
        cy.get(".todo-list li").should("have.length",1)
    });

    it("adds three todos",() => {
        cy.get(".new-todo").type(`${todo_item_1}{enter}`)
        cy.get(".new-todo").type(`${todo_item_2}{enter}`)
        cy.get(".new-todo").type(`${todo_item_3}{enter}`)
        cy.get(".todo-list li").should("have.length",3)
        cy.get(".todo-list li").eq(0).find("label").should("contain",todo_item_1)

    })
})
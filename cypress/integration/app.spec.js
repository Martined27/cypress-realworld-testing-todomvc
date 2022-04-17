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
        cy.createDefaultTodos().as("todos")
        cy.get("@todos").should("have.length",3)

    })

    it('should append new items to the bottom of the list', () => {
       cy.createDefaultTodos().as("todos")   
         // Todo 1
    cy.get("@todos").eq(0).find("label").should("contain", todo_item_1)
         // Todo 2
    cy.get("@todos").eq(1).find("label").should("contain", todo_item_2)
         // Todo 3
    cy.get("@todos").eq(2).find("label").should("contain", todo_item_3)

    cy.get(".todo-count").contains("3 items left")
    });

    it.only("does NOT display the footer when there are no todos", () => {
        cy.get('.footer').should("not.exist")
    })


})
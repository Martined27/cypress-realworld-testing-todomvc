Cypress.Commands.add('createDefaultTodos', () =>  { 
    const todo_item_1= 'Buy Milk'
    const todo_item_2= 'Buy Honey'
    const todo_item_3= 'Buy Satoshi' 

    let cmd =Cypress.log({
        name: "create default todos",
        consoleProps() {
          return {
            "Inserted Todos": [todo_item_1, todo_item_2, todo_item_3],
          }
        },
      })

cy.get(".new-todo", {log: false})
    .type(`${todo_item_1}{enter}`,{log: false})
    .type(`${todo_item_2}{enter}`, {log: false})
    .type(`${todo_item_3}{enter}`, {log: false})

    cy.get('.todo-list li',{log: false}).then((listItems) => {
    cmd.set({ el: listItems}).snapshot().end()
    })
});
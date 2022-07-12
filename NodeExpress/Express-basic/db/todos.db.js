let todoIdFlag = 4;
let todos = [
  { id: 1, title: 'buy a book', completed: false },
  { id: 2, title: 'buy a car', completed: false },
  { id: 3, title: 'buy a bike', completed: false },
];

const getTodosFromDB = () =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(todos);
    }, 1000);
  });

const addTodoFromDB = (newTodo) => {
  return new Promise((res, rej) => {
    newTodo.id = todoIdFlag++;
    // newTodo.id = todoIdFlag;
    // todoIdFlag = todoIdFlag +1;

    todos = [newTodo, ...todos];
    setTimeout(() => {
      res(newTodo);
    }, 1000);
  });
};
const removeTodoFromDB = (id) => {
  return new Promise((res, rej) => {
    let removeTodo;
    todos = todos.filter((todo) => {
      if (todo.id === id) {
        removeTodo = todo;
      }
      return todo.id !== id;
    });
    setTimeout(() => {
      res(removeTodo);
    }, 1000);
  });
};

module.exports = { getTodosFromDB, addTodoFromDB, removeTodoFromDB };

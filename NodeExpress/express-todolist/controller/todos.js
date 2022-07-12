var {
  getTodosFromDB,
  addTodoFromDB,
  removeTodoFromDB,
} = require('../db/todos.db');

// connect to the db

const getAllTodos = getTodosFromDB;

const addTodo = addTodoFromDB;

const removeTodo = removeTodoFromDB;

module.exports = {
  getAllTodos,
  addTodo,
  removeTodo,
};

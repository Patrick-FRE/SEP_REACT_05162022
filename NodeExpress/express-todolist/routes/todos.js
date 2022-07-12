var express = require('express');
var router = express.Router();
var { getAllTodos, addTodo, removeTodo } = require('../controller/todos');

router.get('/', function (req, res, next) {
  getAllTodos().then((todos) => {
    res.json(todos);
  });
});
router.post('/', function (req, res, next) {
  addTodo(req.body).then((newTodo) => {
    res.json(newTodo);
  });
});

router.delete('/:id', function (req, res, next) {
  removeTodo(+req.params.id).then((removeTodo) => {
    res.json(removeTodo);
  });
});

module.exports = router;

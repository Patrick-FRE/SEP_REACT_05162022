const express = require('express');
const cors = require('cors');
const app = express();
const port = 3500;
const {
  getTodosFromDB,
  addTodoFromDB,
  removeTodoFromDB,
} = require('./db/todos.db.js');

app.use((req, res, next) => {
  console.log('waiting');
  next();
});

app.use(cors());

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//   res.header('Access-Control-Allow-Headers', '*');
//   next();
// });

app.use(express.json());

app.get('/', (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = req.path;
  const query = req.query;
  const headers = req.headers;
  console.log('Request is coming');
  res.json({ server: 'Express', method, url, path, query, headers });
});

app.get('/api/todos', (req, res) => {
  getTodosFromDB().then((todos) => {
    res.json(todos);
  });
  // res.json({ test: 'test' });
});

app.post('/api/todos', (req, res) => {
  const newTodo = req.body;
  addTodoFromDB(newTodo).then((newTodo) => {
    res.json(newTodo);
  });
});

app.delete('/api/todos/:id', (req, res) => {
  const id = +req.params.id;
  removeTodoFromDB(id).then((newTodo) => {
    res.json(newTodo);
  });
});

app.use((req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.write('Can not get');
  res.end();
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});

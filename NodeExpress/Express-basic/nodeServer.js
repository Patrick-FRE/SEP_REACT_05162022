const { json } = require('express');
const http = require('http');
const { resolve } = require('path');
const querystring = require('querystring');

const port = 4000;

const bodyJsonParser = (req) => {
  return new Promise((res, rej) => {
    if (req.headers['content-type'] !== 'application/json') {
      resolve({});
      return;
    }
    let jsonData = '';
    req.on('data', (chunk) => {
      jsonData += chunk;
    });
    req.on('end', () => {
      res(JSON.parse(jsonData));
    });
  });
};

const serverHandler = (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = url.split('?')[0];
  const query = querystring.parse(url.split('?')[1]);
  const headers = req.headers;

  bodyJsonParser(req).then((jsonData) => {
    req.body = jsonData;
    if (method === 'POST' && path === '/api/todos') {
      console.log(req.body);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(
        JSON.stringify({
          meesage: 'Add Todos from Node',
        })
      );
      res.end();
      return;
    }

    if (path === '/') {
      console.log('Request is coming');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(
        JSON.stringify({
          server: 'node-server',
          method,
          url,
          path,
          query,
          headers,
        })
      );
      res.end();
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('Can not get');
    res.end();
  });
};

const server = http.createServer(serverHandler);

server.listen(port, () => {
  console.log(`Node app listening at http://localhost:${port}`);
});

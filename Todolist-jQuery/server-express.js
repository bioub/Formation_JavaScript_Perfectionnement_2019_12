const express = require('express');
const cors = require('cors');

const todos = [{
  id: 1,
  title: 'ABC',
  completed: false
}, {
  id: 2,
  title: 'DEF',
  completed: true
}];

const app = express();

// Requetes Cross Origin
app.use(cors());

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.use((req, res) => {
  res.statusCode = 404;
  res.json({err: 'Not Found'});
});

app.listen(3000, () => {
  console.log('Server started');
});

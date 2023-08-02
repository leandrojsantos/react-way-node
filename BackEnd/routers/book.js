const { Router } = require('express');
const routeBook = Router;

routeBook.get('/', (req, res) => {
  res.send('TEST!!!!!!!')
})

module.exports = routeBook;
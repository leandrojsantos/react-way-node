const fs = require('fs')

function getBook (req, res) {
  //res.send('test router get : /book')
  const currentBook = JSON.parse( fs.readFileSync( "./dataBase/book.json" ))
  res.send(currentBook)
}

function getBookId (req, res) {
  //res.send('test router getBookId : /book')
}

function getErrorBook (req, res) {
  /**
  try {
      res.send('Server error')
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
  */
}

function postBook (req, res) {
  //res.send('test router post : /book')
}

function patchBook (req, res) {
  //res.send('test router patch : /book')
}

function deleteBook (req, res) {
  //res.send('test router delete : /book')
}

function optionBook (req, res) {
  //res.send('test router options : /book')
}

function headBook (req, res) {
  //res.send('test router head : /book')
}

function putBook (req, res) {
  //res.send('test router put : /book')
}

module.exports = {
  getBook,
  getBookId,
  getErrorBook,
  postBook,
  patchBook,
  deleteBook,
  optionBook,
  headBook,
  putBook
}
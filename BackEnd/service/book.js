const fs = require('fs')

function getAllBook () {
  //res.send('test router get : /getAllBook')
  return JSON.parse(fs.readFileSync("./dataBase/book.json"))
}

function getIdBook (id) {
  //res.send('test router getBookId : /getIdBook/:id')
  const currentDatabase = JSON.parse(fs.readFileSync("./dataBase/book.json"))
  const idDatabaseFilter = currentDatabase.filter( currentDatabase => currentDatabase.id === id) [0]

  return idDatabaseFilter
}

function postBook () {
  //res.send('test router post : /postBook')
}

function patchBook () {
  //res.send('test router patch : /patchBook/:id')
}

function putBook () {
  //res.send('test router put : /putBook/:id')
}

function deleteIdBook () {
  //res.send('test router delete : /deleteIdBook/:id')
}

function optionBook () {
  //res.send('test router options : /optionBook')
}

function headBook () {
  //res.send('test router head : /headBook')
}

module.exports = {
  getAllBook,
  getIdBook,
  postBook,
  patchBook,
  deleteIdBook,
  optionBook,
  headBook,
  putBook
}
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

function postBook (newBook) {
  //res.send('test router post : /postBook')
  const currentDatabase = JSON.parse(fs.readFileSync("./dataBase/book.json"))
  const postBookResult = [ ...currentDatabase, newBook ]

  fs.writeFileSync("./dataBase/book.json", JSON.stringify(postBookResult))
}

function patchIdBook () {
  //res.send('test router patch : /patchIdBook/:id')
}

function putIdBook () {
  //res.send('test router put : /putIdBook/:id')
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
  patchIdBook,
  deleteIdBook,
  optionBook,
  headBook,
  putIdBook
}
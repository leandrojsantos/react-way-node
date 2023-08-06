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

function patchIdBook (edit, id) {
  //res.send('test router patch : /patchIdBook/:id')
  let currentDatabase = JSON.parse(fs.readFileSync("./dataBase/book.json"))
  const editIndexBook = currentDatabase.findIndex(book => book.id === id)

  const editBook = {...currentDatabase[editIndexBook], ...edit}
  currentDatabase[editIndexBook] = editBook

  fs.writeFileSync("./dataBase/book.json", JSON.stringify(currentDatabase))
}

function deleteIdBook (id) {
  //res.send('test router delete : /deleteIdBook/:id')
  const currentDatabase = JSON.parse(fs.readFileSync("./dataBase/book.json"))
  const idDatabaseFilter = currentDatabase.filter( currentDatabase => currentDatabase.id !== id) 

  fs.writeFileSync("./dataBase/book.json", JSON.stringify(idDatabaseFilter))
}

function putIdBook () {
  //res.send('test router put : /putIdBook/:id')
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
  putIdBook,
  deleteIdBook,
  optionBook,
  headBook
}
const fs = require('fs')

const currentDatabase = JSON.parse(fs.readFileSync("./dataBase/book.json"))

function getAllBook () {
  //res.send('test router get : /getAllBook')
  return currentDatabase
}

function getIdBook () {
  //res.send('test router getBookId : /getIdBook')
}

function getErrorBook () {
  /**
  try {
      res.send('Server error' : /getErrorBook)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
    */
}

function postBook () {
  //res.send('test router post : /postBook')
}

function patchBook () {
  //res.send('test router patch : /patchBook')
}

function deleteIdBook () {
  //res.send('test router delete : /deleteIdBook')
}

function optionBook () {
  //res.send('test router options : /optionBook')
}

function headBook () {
  //res.send('test router head : /headBook')
}

function putBook () {
  //res.send('test router put : /putBook')
}

module.exports = {
  getAllBook,
  getIdBook,
  getErrorBook,
  postBook,
  patchBook,
  deleteIdBook,
  optionBook,
  headBook,
  putBook
}
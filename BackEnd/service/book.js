const fs = require('fs')

function getAllBook () {
  return JSON.parse( fs.readFileSync( "./dataBase/book.json" ))
}

module.exports = {
  getAllBook
}
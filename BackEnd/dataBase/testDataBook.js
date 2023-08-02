const fs = require('fs')

const currentDatabase = JSON.parse(fs.readFileSync("../dataBase/books.json"))
const newDatabase = { id: '10', name: 'add new book'}

fs.writeFileSync("../dataBase/books.json", JSON.stringify([...currentDatabase, newDatabase]))

console.log(JSON.parse(fs.readFileSync("../dataBase/books.json")))
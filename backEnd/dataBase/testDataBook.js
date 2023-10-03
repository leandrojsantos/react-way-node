const fs = require('fs')

const currentDatabase = JSON.parse(fs.readFileSync("../dataBase/book.json"))
const newDatabase = { id: '10', name: 'add new book'}

fs.writeFileSync("../dataBase/book.json", JSON.stringify([...currentDatabase, newDatabase]))

console.log(JSON.parse(fs.readFileSync("../dataBase/book.json")))
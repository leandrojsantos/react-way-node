const express = require("express")
const routeBook = require("./routers/book")

const server = express()

server.use('/books', routeBook)

const port = 8000

server.listen(port, () => {
  console.log(`***SERVER ON PORT ${port}`)
})
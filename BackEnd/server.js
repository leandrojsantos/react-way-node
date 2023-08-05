const express = require("express")
const routeBook = require("./routers/book")

const server = express()
const port = 8000

server.use('/book', routeBook)


server.listen(port, () => {
  console.log(`***SERVER ON PORT ${port}`)
})
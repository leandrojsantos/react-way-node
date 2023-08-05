const { getAllBook } = require ("../service/book")
const { getIdBook } = require ("../service/book")
const { postBook } = require ("../service/book")
const { patchBook } = require ("../service/book")
const { deleteIdBook } = require ("../service/book")
const { optionBook } = require ("../service/book")
const { headBook } = require ("../service/book")
const { putIdBook } = require ("../service/book")


function get (req, res) {
  //res.send('test router get : /bookAllBook')
  const currentBook = getAllBook()
  res.send(currentBook)
}

function getId (req, res) {
  //req.send('test router getId : /getIdBook/:id')
  const id = req.params.id
  const currentBook = getIdBook(id)
  res.send(currentBook)
}

function post (req, res) {
  //res.send('test router post : /postBook')
  const newBook = req.body
  postBook(newBook)
  res.status(201)
  res.send("book inserted success")
}

function patch (req, res) {
  //res.send('test router patch : /patchBook/:id')
}

function put (req, res) {
  //res.send('test router put : /putIdBook:id')
}

function deleteId (req, res) {
  //res.send('test router delete : /deleteIdBook/:id')
}

function option (req, res) {
  //res.send('test router options : /optionBook')
}

function head (req, res) {
  //res.send('test router head : /headBook')
}

module.exports = {
  get,
  getId,
  post,
  patch,
  deleteId,
  option,
  head,
  put
}
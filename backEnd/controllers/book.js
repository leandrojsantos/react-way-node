const { getAllBook } = require ("../service/book")
const { getIdBook } = require ("../service/book")
const { postBook } = require ("../service/book")
const { patchIdBook } = require ("../service/book")
const { deleteIdBook } = require ("../service/book")
const { putIdBook } = require ("../service/book")
const { optionBook } = require ("../service/book")
const { headBook } = require ("../service/book")

function get (req, res) {
  //res.send('test router get : /bookAllBook')
  try {
    const currentBook = getAllBook()
    res.send(currentBook)
  } 
  catch (error) {
      send.status(500)
      send.error("book route get error")
  }
}

function getId (req, res) {
  //req.send('test router getId : /getIdBook/:id')
  try {
    const id = req.params.id
    if (id && Number(id)) {
      const currentBook = getIdBook(id)
      res.send(currentBook)
    } else{
      res.status(422)
      res.send("book route get id error Invalid id")
    }
  } catch (error) {
    send.status(500)
    send.error("book route get id error")
  }
}

function post (req, res) {
  //res.send('test router post : /postBook')
  try {
    const newBook = req.body
    if (req.body.name && req.body.id){
      postBook(newBook)
      res.status(201)
      res.send("book inserted success")
    } else {
      res.status(422)
      res.send("book name obligatory")
    }
  } catch (error) {
    send.status(500)
    send.error("book rout post error")
  }
}

function patch (req, res) {
  //res.send('test router patch : /patchIdBook/:id')
  try {
    const id = req.params.id
    if (id && Number(id)) {
      const body = req.body
      patchIdBook(body, id)
      res.send("book edit success")
    } else {
      send.status(422)
      send.error("Partial Content problem edit route patch")
    }
  } catch (error) {
    send.status(500)
    send.error("book route patch error")
  }
}

function put (req, res) {
  //res.send('test router put : /putIdBook:id')
  try {
    
  } catch (error) {
      send.status(500)
      send.error("book route put error")
  }
}

function deleteId (req, res) {
  //res.send('test router delete : /deleteIdBook/:id')
  try {
    const id = req.params.id
    if (id && Number(id)) {
      deleteIdBook (id) 
      res.send("book delete success")
    } else {
      send.status(422)
      send.error("book route delete error id invalid")
    }
  } catch (error) {
      send.status(500)
      send.error("book route delete error")
  }
}

function option (req, res) {
  //res.send('test router options : /optionBook')
  try {
    
  } catch (error) {
    send.status(500)
    send.error("book route option error")
  }
}

function head (req, res) {
  //res.send('test router head : /headBook')
  try {
    
  } catch (error) {
    send.status(500)
    send.error("book route header error")
  }
}

module.exports = {
  get,
  getId,
  post,
  patch,
  put,
  deleteId,
  option,
  head
}
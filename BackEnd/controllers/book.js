const { getAllBook } = require ("../service/book")

function get (req, res) {
  //res.send('test router get : /bookAllBook')
  const currentBook = getAllBook()
  res.send(currentBook)
}

function getId (req, res) {
  //res.send('test router getId : /getIdBook')
}

function getError (req, res) {
  /**
  try {
      res.send('Server error' : /getErrorBook)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
    */
}

function post (req, res) {
  //res.send('test router post : /postBook')
}

function patch (req, res) {
  //res.send('test router patch : /patchBook')
    const currentBook = getAllBook()
  res.send(currentBook)
}

function deleteId (req, res) {
  //res.send('test router delete : /deleteIdBook')
}

function option (req, res) {
  //res.send('test router options : /optionBook')
}

function head (req, res) {
  //res.send('test router head : /headBook')
}

function put (req, res) {
  //res.send('test router put : /putBook')
}

module.exports = {
  get,
  getId,
  getError,
  post,
  patch,
  deleteId,
  option,
  head,
  put
}
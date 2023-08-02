function getErrorBook (req, res) {
  try {
      res.send('Server error')
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

function postBook (req, res) {
  res.send('test router post : /books')
}

function patchBook (req, res) {
  res.send('test router patch : /books')
}

function deleteBook (req, res) {
  res.send('test router delete : /books')
}

function optionBook (req, res) {
  res.send('test router options : /books')
}

function headBook (req, res) {
  res.send('test router head : /books')
}

function putBook (req, res) {
  res.send('test router put : /books')
}

module.exports = {
  getErrorBook,
  postBook,
  patchBook,
  deleteBook,
  optionBook,
  headBook,
  putBook
}
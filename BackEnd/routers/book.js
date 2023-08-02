const { Router } = require("express")
const { getErrorBook } = require("../controllers/book")
const { postBook } = require("../controllers/book")
const { patchBook } = require("../controllers/book")
const { deleteBook } = require("../controllers/book")
const { optionBook } = require("../controllers/book")
const { headBook } = require("../controllers/book")
const { putBook } = require("../controllers/book")

const router = Router()

router.get('/', getErrorBook)

router.post('/', postBook)

router.patch('/', patchBook)

router.delete('/', deleteBook)

router.options('/', optionBook)

router.head('/', headBook)

router.put('/', putBook)

module.exports = router
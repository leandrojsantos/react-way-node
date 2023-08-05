const { Router } = require("express")
const { get } = require("../controllers/book")
const { getId } = require("../controllers/book")
const { getError } = require("../controllers/book")
const { post } = require("../controllers/book")
const { patch } = require("../controllers/book")
const { deleteId } = require("../controllers/book")
const { option } = require("../controllers/book")
const { head } = require("../controllers/book")
const { put } = require("../controllers/book")

const router = Router()

router.get('/', get)

router.get('/', getError)

router.get('/:id', getId)

router.post('/', post)

router.patch('/:id', patch)

router.delete('/:id', deleteId)

router.options('/', option)

router.head('/', head)

router.put('/:id', put)

module.exports = router
const { Router } = require("express")
const { get } = require("../controllers/book")
const { getId } = require("../controllers/book")
const { post } = require("../controllers/book")
const { patch } = require("../controllers/book")
const { deleteId } = require("../controllers/book")
const { option } = require("../controllers/book")
const { head } = require("../controllers/book")
const { put } = require("../controllers/book")

const router = Router()

router.get('/', get)

router.post('/', post)

router.put('/:id', put)

router.patch('/:id', patch)

router.delete('/:id', deleteId)

router.get('/:id', getId)

router.options('/', option)

router.head('/', head)

module.exports = router
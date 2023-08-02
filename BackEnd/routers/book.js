const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send('test router get : /books')
})

router.post('/', (req, res) => {
    res.send('test router post : /books')
})

router.patch('/', (req, res) => {
    res.send('test router patch : /books')
})

router.delete('/', (req, res) => {
    res.send('test router delete : /books')
})

router.options('/', (req, res) => {
    res.send('test router options : /books')
})

router.head('/', (req, res) => {
    res.send('test router head : /books')
})

router.put('/', (req, res) => {
    res.send('test router put : /books')
})

module.exports = router
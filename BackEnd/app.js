const express = require('express')
const app = express()

const port = 8000

app.get('/', (req, res) => {
  res.send('Test!!!!!!!')
})

app.listen(port, () => {
  console.log(`Escutando na porta ${port}`)
})
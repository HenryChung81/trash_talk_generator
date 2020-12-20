// include packages and define server related variables
const express = require('express')
const exphbs = require("express-handlebars")
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trash_talk')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.body.career', req.body.career)
  const career = req.body.career
  const trashTalk = generateTrashTalk(career)
  res.render('index', { trashTalk, career })
})

app.listen(port, () => {
  console.log(`Express app is listening on port http://localhost:${port}`)
})
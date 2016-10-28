const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://linear:movement@ds041484.mlab.com:41484/linear_movement', (err, database) => {
  if (err) return console.log(err)
  db = database;
  console.log(db);
  app.listen(process.env.PORT || 6868, () => {
    console.log('Ca tourne sur http://localhost:6868')
  })
})

app.set('view engine', 'html')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('dist'))

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.html', {quotes: result})
  })
})

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongojs = require('mongojs');

var db = mongojs('linear_movement', ['linear_movement']);

console.log(db);

app.listen(6868);

app.set('view engine', 'html')
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(express.static('dist'))

app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
        if (err) return console.log(err)
        res.render('index.html', {
            quotes: result
        })
    })
})

app.get('/linear_movement', function(req, res) {
    console.log('I received a GET request');

    db.linear_movement.find(function(err, docs) {
        res.json(docs);
        console.log(docs);
    });
});
app.post('/linear_movement', function(req, res) {
    console.log(req.body);
    db.linear_movement.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/linear_movement/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    db.linear_movement.remove({
        _id: mongojs.ObjectId(id)
    }, function(err, doc) {
        res.json(doc);
    });
});

app.get('/linear_movement/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    db.linear_movement.findOne({
        _id: mongojs.ObjectId(id)
    }, function(err, doc) {
        res.json(doc);
    });
});

app.put('/linear_movement/:id', function(req, res) {
    var id = req.params.id;
    console.log(req.body.name);
    db.linear_movement.findAndModify({
        query: {
            _id: mongojs.ObjectId(id)
        },
        update: {
            $set: {
                title: req.body.title,
                corpus: req.body.corpus,
            }
        },
        new: true
    }, function(err, doc) {
        res.json(doc);
    });
});

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongojs = require('mongojs');
const request = require('request');

var db = mongojs('mongodb://Poncho:database666@ds013569.mlab.com:13569/linear_movement', ['Articles']);

app.use(function(req, res, next) {
    var auth;
    if (req.headers.authorization) {
        auth = new Buffer(req.headers.authorization.substring(6), 'base64').toString().split(':');
    }
    if (!auth || auth[0] !== 'Florent' || auth[1] !== 'linear2702') {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="MyRealmName"');
        res.end('Unauthorized');
    } else {
        next();
    }
});

app.get('/backOffice', function(req, res) {
    res.sendFile(__dirname + '/dist/views/backOffice.html');
});

console.log(__dirname);

app.listen(process.env.PORT || 6868);

app.set('view engine', 'html')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('dist'));

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

    db.Articles.find(function(err, docs) {
        res.json(docs);
        console.log(docs);
    });
});
app.post('/linear_movement/addArticle', function(req, res) {
    console.log(req.body);
    db.Articles.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/linear_movement/remove/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    db.Articles.remove({
        _id: mongojs.ObjectId(id)
    }, function(err, doc) {
        res.json(doc);
    });
});

app.get('/linear_movement/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    db.Articles.findOne({
        _id: mongojs.ObjectId(id)
    }, function(err, doc) {
        res.json(doc);
    });
});

app.put('/linear_movement/update/:id', function(req, res) {
    var id = req.params.id;
    console.log(req.body.name);
    db.Articles.findAndModify({
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

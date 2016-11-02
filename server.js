const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongojs = require('mongojs');
const request = require('request');

let db = mongojs('mongodb://Poncho:database666@ds013569.mlab.com:13569/linear_movement', ['Articles', 'Home']);

app.use((req, res, next) => {
    let auth;
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

app.get('/backOffice', (req, res) => {
    res.sendFile(__dirname + '/dist/views/backOffice.html');
});

app.listen(process.env.PORT || 6868);

app.set('view engine', 'html')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     db.collection('quotes').find().toArray((err, result) => {
//         if (err) return console.log(err)
//         res.render('index.html', {
//             quotes: result
//         })
//     })
// })

app.get('/Artiste', (req, res) => {
    console.log('I received a GET request');
    db.Articles.find(function(err, docs) {
        res.json(docs);
        console.log(docs);
    });
});
app.get('/Home', (req, res) => {
    console.log('I received a GET request');
    db.Home.find(function(err, docs) {
        res.json(docs);
        console.log(docs);
    });
});
app.put('/linear_movement/updateHome', (req, res) => {
    let id = req.params.id;
    console.log(req.body.name);
    db.Home.findAndModify({
        query: {
            _id: mongojs.ObjectId('5819f74dda1b16157afd60c3')
        },
        update: {
            $set: {
                bioLinear: req.body.bioLinear,
                contact: req.body.contact,
                soundcloud: req.body.soundcloud,
                bandcamp: req.body.bandcamp,
                facebook: req.body.facebook,
            }
        },
        new: true
    }, function(err, doc) {
        res.json(doc);
    });
});
app.post('/linear_movement/addArtist', (req, res) => {
    console.log(req.body);
    db.Articles.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.post('/linear_movement/addHome', (req, res) => {
    console.log(req.body);
    db.Home.insert(req.body, function(err, doc) {
        res.json(doc);
    });
});

app.delete('/linear_movement/remove/artiste/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    db.Articles.remove({
        _id: mongojs.ObjectId(id)
    }, function(err, doc) {
        res.json(doc);
    });
});

app.get('/linear_movement/edit/artiste/:id', (req, res) => {
    let id = req.params.id;
    console.log(id);
    db.Articles.findOne({
        _id: mongojs.ObjectId(id)
    }, function(err, doc) {
        res.json(doc);
    });
});

app.put('/linear_movement/update/artiste/:id', (req, res) => {
    let id = req.params.id;
    db.Articles.findAndModify({
        query: {
            _id: mongojs.ObjectId(id)
        },
        update: {
            $set: {
              name: req.body.name,
              bio: req.body.bio,
              facebook: req.body.facebook,
              discorgs: req.body.discorgs,
              resident: req.body.resident,
              events: [{
                  titleEvent1:req.body.titleEvent1,
                  descriptEvent1: req.body.descriptEvent1
              }, {
                  titleEvent2: req.body.titleEvent2,
                  descriptEvent2: req.body.descriptEvent2
              }, {
                  titleEvent3: req.body.titleEvent3,
                  descriptEvent3: req.body.descriptEvent3
              }, {
                  titleEvent4: req.body.titleEvent4,
                  descriptEvent4: req.body.descriptEvent4
              }, {
                  titleEvent5: req.body.titleEvent5,
                  descriptEvent5: req.body.descriptEvent5
              }, {
                  titleEvent6: req.body.titleEvent6,
                  descriptEvent6: req.body.descriptEvent6
              }]
            }
        },
        new: true
    }, function(err, doc) {
        res.json(doc);
    });
});

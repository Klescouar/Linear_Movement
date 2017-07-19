const express = require('express')
const app = express();
const routes = require('./routes.js');
const bodyParser = require('body-parser')
// const mongojs = require('mongojs');
const mongoose = require('mongoose')
const request = require('request');
const fs = require('fs');
const api = require('./api');
const passport = require('passport');


app.use(routes);
// const db = mongojs('mongodb://Poncho:database666@ds013569.mlab.com:13569/linear_movement', ['Articles', 'Home']);



// app.get('/backOffice', (req, res) => {
//     // app.use((req, res, next) => {
//     //     const auth = [];
//     //     if (req.headers.authorization) {
//     //         auth = new Buffer(req.headers.authorization.substring(6), 'base64').toString().split(':');
//     //     }
//     //     if (!auth || auth[0] !== 'Florent' || auth[1] !== 'linear2702') {
//     //         res.statusCode = 401;
//     //         res.setHeader('WWW-Authenticate', 'Basic realm="MyRealmName"');
//     //         res.end('Unauthorized');
//     //     } else {
//     //         next();
//     //     }
//     // });
//     // res.sendFile(__dirname + '/dist/views/backOffice.html');
//     db.backOffice.find(function(err, docs) {
//         res.json(docs);
//         // console.log(docs);
//     });
// });

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

// app.get('/Artiste', (req, res) => {
//     console.log('I received a GET request');
//     db.Articles.find(function(err, docs) {
//         res.json(docs);
//         // console.log(docs);
//     });
// });
// app.get('/Home', (req, res) => {
//     console.log('I received a GET request');
//     db.Home.find(function(err, docs) {
//         res.json(docs);
//         // console.log(docs);
//     });
// });
// app.put('/linear_movement/updateHome', (req, res) => {
//     const id = req.params.id;
//     db.Home.findAndModify({
//         query: {
//             _id: mongojs.ObjectId('5819f74dda1b16157afd60c3')
//         },
//         update: {
//             $set: {
//                 bioLinear: req.body.bioLinear,
//                 contact: req.body.contact,
//                 soundcloud: req.body.soundcloud,
//                 bandcamp: req.body.bandcamp,
//                 facebook: req.body.facebook,
//                 video: req.body.video,
//                 background: req.body.background,
//                 EP: req.body.EP,
//             }
//         },
//         new: true
//     }, function(err, doc) {
//         res.json(doc);
//     });
// });
// app.post('/linear_movement/addArtist', (req, res) => {
//     // console.log(req.body);
//     db.Articles.insert(req.body, function(err, doc) {
//         res.json(doc);
//     });
// });

// app.post('/linear_movement/addHome', (req, res) => {
//     // console.log(req.body);
//     db.Home.insert(req.body, function(err, doc) {
//         res.json(doc);
//     });
// });

// app.delete('/linear_movement/remove/artiste/:id', (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     db.Articles.remove({
//         _id: mongojs.ObjectId(id)
//     }, function(err, doc) {
//         res.json(doc);
//     });
// });

// app.get('/linear_movement/artiste/:id', (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     db.Articles.findOne({
//         _id: mongojs.ObjectId(id)
//     }, function(err, doc) {
//         res.json(doc);
//     });
// });

// app.put('/linear_movement/update/artiste/:id', (req, res) => {
//     const id = req.params.id;
//     db.Articles.findAndModify({
//         query: {
//             _id: mongojs.ObjectId(id)
//         },
//         update: {
//             $set: {
//                 name: req.body.name,
//                 bio: req.body.bio,
//                 facebook: req.body.facebook,
//                 discorgs: req.body.discorgs,
//                 resident: req.body.resident,
//                 soundcloud: req.body.soundcloud,
//                 photo: req.body.photo,
//                 events: [{
//                     dateEvent: req.body.events[0].dateEvent1,
//                     descriptEvent: req.body.events[0].descriptEvent1,
//                     spotEvent: req.body.events[0].spotEvent1,
//                 }, {
//                     dateEvent: req.body.events[1].dateEvent2,
//                     descriptEvent: req.body.events[1].descriptEvent2,
//                     spotEvent: req.body.events[1].spotEvent2,
//                 }, {
//                     dateEvent: req.body.events[2].dateEvent3,
//                     descriptEvent: req.body.events[2].descriptEvent3,
//                     spotEvent: req.body.events[2].spotEvent3,
//                 }, {
//                     dateEvent: req.body.events[3].dateEvent4,
//                     descriptEvent: req.body.events[3].descriptEvent4,
//                     spotEvent: req.body.events[3].spotEvent4,
//                 }, {
//                     dateEvent: req.body.events[4].dateEvent5,
//                     descriptEvent: req.body.events[4].descriptEvent5,
//                     spotEvent: req.body.events[4].spotEvent5,
//                 }, {
//                     dateEvent: req.body.events[5].dateEvent6,
//                     descriptEvent: req.body.events[5].descriptEvent6,
//                     spotEvent: req.body.events[5].spotEvent6,
//                 }]
//             }
//         },
//         new: true
//     }, function(err, doc) {
//         res.json(doc);
//     });
// });

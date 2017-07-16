'use strict';
const mongoose = require('mongoose');
const ArtistModel = require('../../database').artist;

const artistController = {
	find : (req, res) => {
		ArtistModel.find()
		.then(data =>{
			res.send(data);
			console.log(data)
		})
		.catch(err =>{
			res.send('Failed :::' + err);
		})
	},
	add :(req,res) =>{
		const newArtist = new ArtistModel(req.body);
		newArtist.save()
			.then( data => {
				res.send(data);
			})
			.catch( err => {
				res.send(err);
			});
	},
	findOne :(req, res) => {
		const id = req.params.id_artist;
		ArtistModel.findOne(id, function (err, doc){
			if (err) {
				throw error;
			}else{
				res.json(doc)
			}
		})
	},
	updateArtist :(req,res)=>{
   		ArtistModel.findById(req.params.id, (err,user)=>{
     			if(err){
       				res.send(err);
     			}
     			user.name = req.body.name;
     			user.save((err)=>{
       			if(err){
         				res.send(err);
      				 res.json({message: 'user Updated!'});
      			}
     			});
   		})
   	}
}
module.exports = artistController;


// 'use strict';

// const ArtistModel = require('../../database').artists;

// const artistController = {
//   find : (req, res) => {
//   ArtistModel.find()
//   .then(data =>{
//   	res.send('Success :::' + data);
//   	console.log(data)
//   })
//   .catch(err =>{
//   	res.send('Failed :::' + err);
//   })
//   },
//   add :(req,res) =>{
//     const newArtist = new ArtistModel(req.body);
//     newArtist.save()
//     .then( data => {
//       res.send('Operation success ::: ' + data);
//     })
//     .catch( err => {
//       res.send('Operation failed ::: ' + err);
//     });
//   },
//   ArtistModel.findById(req.params.ArtistModel, function (err, todo) {  
//     if (err) {
//         res.status(500).send(err);
//     } else {
//                 ArtistModel.name: req.body.name,
//                 ArtistModel.bio: req.body.bio,
//                 ArtistModel.facebook: req.body.facebook,
//                 ArtistModel.discorgs: req.body.discorgs,
//                 ArtistModel.resident: req.body.resident,
//                 ArtistModel.soundcloud: req.body.soundcloud,
//                 ArtistModel.photo: req.body.photo,
//                 ArtistModel.events: [{
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
//         ArtistModel.save(function (err, todo) {
//             if (err) {
//                 res.status(500).send(err)
//             }
//             res.send(ArtistModel);
//         });
//     }
// });
// }
// module.exports = artistController;
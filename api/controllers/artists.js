'use strict';
const mongoose = require('mongoose');
const ArtistModel = require('../../database').artist;

const artistController = {
	find : (req, res) => {
		ArtistModel.find()
		.then(data =>{
			res.send(data);
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
		const id = req.params.id;
		ArtistModel.findOne({_id : id}, function (err, doc){
			if (err) {
				throw error;
			}else{
				res.json(doc)
			}
		})
	},
	updateArtist :(req,res)=>{
		const id = req.params.id;
   		ArtistModel.findById(id,(err,artist)=>{
     			if(err){
       				res.send(err);
     			}else{
     			   	artist.name = req.body.name,
     			    	artist.bio = req.body.bio,
                      			artist.facebook = req.body.facebook,
     			    	artist.discorgs = req.body.discorgs,
     			    	artist.resident = req.body.resident,
     			    	artist.soundcloud = req.body.soundcloud,
                      			artist.photo = req.body.photo,
                      			artist.events = req.body.events
     				artist.save((err)=>{
       					if(err){
         						res.send(err);
      					}else{
      						res.send(artist);
      					}
     				});
     			}
   		})
   	},
	deleteArtist :(req,res)=>{
		const id = req.params.id;
   		ArtistModel.remove({_id: id}, (err, artist)=>{
   			console.log(id)
     			if(err){
       				res.send(err);
     			}
     			else{
     				res.json({ message: 'Artist removed!' });
     			}
   		})
   	}
}
module.exports = artistController;
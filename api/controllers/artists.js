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
		ArtistModel.findOne({_id : id}, function (err, doc){
			if (err) {
				throw error;
			}else{
				res.json(doc)
			}
		})
	},
	updateArtist :(req,res)=>{
		const id = req.params.id_artist;
   		ArtistModel.findById(id, (err,user)=>{
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
   	},
	deleteArtist :(req,res)=>{
		const id = req.params.id_artist;
   		ArtistModel.findOneAndRemove(id, (err)=>{
     			if(err){
       				res.send(err);
     			}
     			else{
     				res.json({ message: 'Student removed!' });
     			}
   		})
   	}
}
module.exports = artistController;
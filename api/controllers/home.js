'use strict';
const mongoose = require('mongoose');
const HomeModel = require('../../database').home;

const homeController = {
	find : (req, res) => {
		HomeModel.find()
		.then(data =>{
			res.send(data);
		})
		.catch(err =>{
			res.send('Failed :::' + err);
		})
	},
	updateHome :(req,res)=>{
   		HomeModel.findById('5954fd9e858642526d6d501c',(err,home)=>{
     			if(err){
       				res.send(err);
     			}else{
     			    home.bioLinear = req.body.bioLinear,
     			    home.contact = req.body.contact,
                      home.booking = req.body.booking,
     			    home.video = req.body.video,
     			    home.soundcloud = req.body.soundcloud,
     			    home.facebook = req.body.facebook,
                      home.background = req.body.background,
                      home.bandcamp = req.body.bandcamp,
                      home.EP = req.body.EP

     				home.save((err)=>{
       					if(err){
         						res.send(err);
      					}else{
      						res.json({message: 'hom Updated!'});
      					}
     				});
     			}
   		})
   	}
}

module.exports = homeController;
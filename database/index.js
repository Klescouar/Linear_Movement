'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://Jean:Linear2a@ds013569.mlab.com:13569/linear_movement');

const ArtistSchema = require('./models/artists.js');
const HomeSchema = require('./models/home.js');
const UserSchema = require('./models/user.js');
module.exports ={
	home : mongoose.model('Home', HomeSchema),
	artist : mongoose.model('Artist', ArtistSchema),
	user : mongoose.model('User', UserSchema)
} 
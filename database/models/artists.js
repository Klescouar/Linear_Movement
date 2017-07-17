'use strict';

const Schema = require('mongoose').Schema;

const ArtistSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true 
  },
  bio:{
  	type: String,
  	unique: true,
  	required: true
  },
  facebook:{
    type: String,
    lowercase: true,
    required: true
  },
  discorgs:{
    type: String,
    lowercase: true,
    required: true
  },
  resident:{
    type: String,
    lowercase: true,
    required: true
  },
  soundcloud:{
    type: String,
    lowercase: true,
    required:true
  },
  photo:{
    type: String,
    lowercase: true,
    required:true
  },
  events: [
    {
      dateEvent:{
        type: String
      },
      descriptionEvent:{
        type:String
      },
      placeEvent:{
        type:String
      }
    }
  ]
});

module.exports =  ArtistSchema;
'use strict';

const Schema = require('mongoose').Schema;

const HomeSchema = new Schema({
  bioLinear: {
    type: String,
    unique: true,
  },
   contact: {
    type: String,
    lowercase: true,
    unique: true,
  },
    booking: {
    type: String,
    lowercase: true,
    unique: true,
  },
   video: {
    type: String,
    lowercase: true,
    unique: true,
  },
   soundcloud: {
    type: String,
    lowercase: true,
    unique: true,
  },
   facebook: {
    type: String,
    lowercase: true,
    unique: true,
  },
   background: {
    type: String,
    lowercase: true,
    unique: true,
  },
     bandcamp: {
    type: String,
    lowercase: true,
    unique: true,
  },
   EP: {
    type: String,
    lowercase: true,
    unique: true,
  }
});

module.exports =  HomeSchema;
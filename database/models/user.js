'use strict';

const Schema = require('mongoose').Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    unique: true,
    required: true 
  },
  password: {
    type: String,
    unique: true,
    required: true 
  }
});

module.exports =  UserSchema;

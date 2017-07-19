'use strict';

const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');
const UserModel = require('../../database').user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  username: {
    type: String
  },
   password: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  }
});

UserSchema.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.password, null, null, function(err, hash){
        if (err) return next(err);
        user.password= hash;
        next(); 
    })
})

UserSchema.methods.comparePassword =function(password){
    return  bcrypt.compareSync(password, this.password);
}

module.exports =  UserSchema;

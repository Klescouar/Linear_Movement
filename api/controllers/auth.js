'use strict';
const mongoose = require('mongoose');
const jwt = require('jwt-simple');
const UserModels = require('../../database').user;
const encodeString = 'secret'


const AuthController = {

register :(req, res) =>{
  const user = new UserModels();
  user.username = req.body.username;
  user.password = req.body.password;
  user.email = req.body.email;
  if (req.body.username == null || req.body.username == '' || req.body.email == null || req.body.email == '' || req.body.password == null || req.body.password == '') {
    res.json({success: false, msg : 'newUser not provided'})
  }else{
    user .save(function(err){
      if (err) {
        return res.json({success: false, msg: 'user already exists.'});
      }else{
        return res.json({success: true, msg: 'Successful Add user.'});
      }
    })
  }
},
  authenticate : (req, res) => {
  UserModels.findOne({username: req.body.username}).select('email username password').exec(function(err, user){
    if (err) throw err;
    if(!user){
      res.json({success: false, msg:'could not auth user'});
    }else if(user){
      const validPassword = comparePassword(req.body.password)
      if (!validPassword) {
        res.json({success:false, msg:'could not auth password '})
      }else{
        res.json({success:true, msg:'User auth !!!'})
      }
    }
  })
}
}
module.exports = AuthController;
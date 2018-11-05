const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* GET users listing. */


//Create a new User
router.post('/', (req, res, next)=>{
  let body = req.body;
  let date = Date.now();
  const user = new User(Object.assign({}, body, {dateCreated: date, dateUpdated: date}));
  user.save().then((response)=>{
    if(response){
      res.status(200).json({"response": "The user was saved successfully!"});
    }
  }).catch((err)=> {
    res.status(400).json(err)
  })  
});


//Get a list of all users
router.get('/', (req, res, next)=>{
  User.find().then((users)=>{
    if(users){
      res.status(200).json(users);
    }
  }).catch((err)=>{
    res.status(404).json(err)
  })
})

//Retrieve a specific user by Username, which must be unique.
router.get('/:username', function(req, res, next) {
  User.find({username: req.params.username}).then((user)=>{
    if(user){
      res.status(200).json(user);
    }
  }).catch(err=> res.status(404).json(err))
});


module.exports = router;

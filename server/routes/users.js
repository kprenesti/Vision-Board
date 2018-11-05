const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* GET users listing. */

//Retrieve a user
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

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
})
module.exports = router;

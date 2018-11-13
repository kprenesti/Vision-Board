const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* GET users listing. */


//Create a new User
router.post('/', (req, res, next)=>{
  let body = req.body;
  let date = Date.now();
  const user = new User(Object.assign({}, body, {dateCreated: date, dateUpdated: date}));
  User.find({username: body.username}).then((theUser)=>{
    if(theUser.username === body.username){
      // res.status(400).json({"error": "The username is already in use.  Please try again."});
      // throw new Error('The username is already in use.');
      console.log('This works.')
      return;
      console.log(theUser)
    } //end if
    else {
      console.log("inElse", theUser)
      // user.save().then((response)=>{
      //   if(response){
      //     res.status(200).json({"response": "The user was saved successfully!"});
        }
      }).catch((err)=> {
        res.status(400).json(err)
      }) //end .catch ; //end user.save.then
     //end else
}); //end router.post


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
  }).catch(err => res.status(404).json(err))
});


module.exports = router;

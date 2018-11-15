const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* GET users listing. */


//Create a new User
router.post('/', (req, res, next) => {
      let body = req.body;
      let date = Date.now();
      const user = new User(Object.assign({}, body, {
        dateCreated: date,
        dateUpdated: date
      }));
      User.find({username: body.username})
      .then((theUser) => {
        if (theUser[0].username === body.username) {
          // res.status(400).json({"error": "The username is already in use.  Please try again."});
          throw new Error('The username is already in use.');
        } //end if
        else {
          user.save().then((response) => {
            if (response) {
              res.status(200).json({
                "response": "The user was saved successfully!"
              });
            }
          })
        } //end else
      }).catch(next) //end .catch ; //end user.save.then
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
router.get('/:username', (req, res, next) => {
  User.find({username: req.params.username}).then((user)=>{
    if(user){
      res.status(200).json(user);
    }
  }).catch(next)
});


//Modify an existing User
router.put('/:username', (req, res, next)=>{
  let updatedInfo = {...req.body, dateUpdated: Date.now()}
  User.findOneAndUpdate({username: req.params.username}, updatedInfo, (err)=> {
    if(err){
      res.status(500).json(err)
    }  
  }).then((updatedUser)=>{res.status(200).json(updatedUser)});
  })
});

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* GET users listing. */

// @route   POST /api/users
// @desc    Create a new User
// @access  public
router.post('/', (req, res, next) => {
      let body = req.body;
      body.password = User.hashPassword(body.password);
      const date = Date.now();
      const user = new User(...body, {
        dateCreated: date,
        dateUpdated: date,
      });

      // Check for existing user with same username.  Throw error if a user exists.
      User.find({username: body.username})
      .then((theUser) => {
        if (theUser.username === body.username) {
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


// @route   GET /api/users
// @desc    Get a list of all users
// @access  Public
router.get('/', (req, res, next)=>{
  User.find().then((users)=>{
    if(users){
      res.status(200).json(users);
    }
  }).catch((err)=>{
    res.status(404).json(err)
  })
})


// @route   GET /api/users/:username
// @desc    Retrieve a specific user by Username, which must be unique.
// @access  Public
router.get('/:username', (req, res, next) => {
  User.find({username: req.params.username}).then((user)=>{
    if(user){
      res.status(200).json(user);
    }
  }).catch(next)
});


// @route   PUT /api/users
// @desc    Modify an existing User
// @access  Private

// TODO: Check that user is logged in and accessing their own user info.
router.put('/:username', (req, res, next)=>{
  let updatedInfo = {...req.body, dateUpdated: Date.now()}
  User.findOneAndUpdate({username: req.params.username}, updatedInfo, (err)=> {
    if(err){
      res.status(500).json(err)
    }  
  }).then((updatedUser)=>{res.status(200).json(updatedUser)});
  });


// @route   DELETE /api/users/:username
// @desc    Delete a user
// @access  Private

// TODO: Check that user is logged in and deleting their own account.
router.delete('/:username', (req, res, next)=>{
  User.findOneAndDelete({username:req.params.username}).then(()=>{
    res.status(200).json({'msg': `User ${req.params.username} has been deleted successfully.`})
  }).catch(next)});

module.exports = router;

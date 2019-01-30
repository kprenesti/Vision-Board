const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// @route:  POST  /api/users/register
// @desc:   Registers a new user
// @access: Public
router.post('/register', (req, res, next) => {
  let {
    username,
    email,
    password
  } = req.body;
  // body.password = User;
  let date = Date.now();
  const user = new User(Object.assign({}, body, {
    dateCreated: date
  }));

  //Check for existing user with same username.  Throw error if a user exists.
  User.find({
      username
    })
    .then((theUser) => {
      console.log({
        'username': username
      });

      if (theUser.username === username) {
        res.status(400).json({
          "error": "The username is already in use.  Please try again."
        });
      } //end if

      // Use bcrypt to generate the salt and hash, modify the req.body.pw with the hash, then save user with hashed pw.
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          req.body.password = hash;
          theUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        })
      })

    }).catch(err => console.log(err)); //end .catch
}); //end router.post

// @route:  POST /api/users/login
// @desc:   Registers a new user
// @access: Public
//Retrieve a specific user by Username, which must be unique.
router.post('/login', (req, res, next) => {
  User.find({
      username: req.params.username
    })
    .then((user) => {
      // If no user, throw a flying fit.
      if (!user) return res.status(400).json({
        err: "User not found."
      });
      // User is found.  Check given pw with stored pw.
      bcrypt.compare(req.body.password, user.password)
        .then(match => {
          if (!match) return res.status(400).json({
            err: "Password incorrect."
          });

          // Woo! We have a match! Now we need the token, and we get to populate the token with the user info
          let jwt_payload = {
            id: user.id,
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
          };
          // Sign the token.  payload, secret, configObj, cb(err, token)  token: "Bearer ${token}"
          jwt.sign(
            jwt_payload,
            process.env.SECRET, {
              expiresIn: 86400
            },
            (err, token) => {
              res.json({
                success: true,
                token: `Bearer ${token}`
              })
            } // end cb
          )

        })

    }).catch(next)
});


//Modify an existing User
router.put('/:username', passport.authenticate('jwt', {
  failureRedirect: '/login'
}), (req, res, next) => {
  let updatedInfo = { ...req.body,
    dateUpdated: Date.now()
  }
  User.findOneAndUpdate({
    username: req.params.username
  }, updatedInfo, (err) => {
    if (err) {
      res.status(500).json(err)
    }
  }).then((updatedUser) => {
    res.status(200).json(updatedUser)
  });
});

//Delete a user
router.delete('/:username', (req, res, next) => {
  User.findOneAndDelete({
    username: req.params.username
  }).then(() => {
    res.status(200).json({
      'msg': `User ${req.params.username} has been deleted successfully. Sorry to see you go.  Hope to see you again some day!`
    })
  }).catch(next)
});

module.exports = router;
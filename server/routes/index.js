const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.json({message: "This muthafucka works!"})
})

router.post('/api/newuser', (req, res)=>{
    let newbie = new User(req.body);
    newbie.save().then((res)=>{
        console.log(res);
    }, (err)=>{
        console.error(err);
    })
});

module.exports = router;
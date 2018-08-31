require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const passport = require('passport');
const path = require('path');
const mongoose = require('mongoose');
const db = mongoose.connection;
const User = require('./models/User');

const PORT = process.env.PORT || 3210;
const router = express.Router();

app.use(helmet());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
morgan('tiny');


mongoose.connect(process.env.MONGOOSE_URL, {useNewUrlParser: true, createIndexes: true }, (e)=>{
   !e ? console.log('The database is connected!'): ''
}).catch((err)=>{console.log(err)});

router.get('/', (req, res)=>{
    res.json({message: "This muthafucka works!"})
});
app.use('/api', router);

app.post('/api/newuser', (req, res)=>{
    let newbie = new User(req.body);
    newbie.save().then((res)=>{
        console.log(res);
    }, (err)=>{
        console.error(err);
    })
})



app.listen(PORT, ()=>{
    console.log(`Serving now on port ${PORT}`);
});
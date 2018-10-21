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



const PORT = process.env.PORT || 3210;
const routes = require('./routes');

app.use(helmet());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
morgan('tiny');





app.use('/', routes);




app.listen(PORT, ()=>{
    console.log(`Serving now on port ${PORT}`);
});
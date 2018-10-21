const mongoose = require('mongoose');
const db = mongoose.connection;

module.exports = mongoose.connect(process.env.MONGOOSE_URL, {useNewUrlParser: true, createIndexes: true }, (e)=>{
    !e ? console.log('The database is connected!'): ''
 }).catch((err)=>{console.log(err)});
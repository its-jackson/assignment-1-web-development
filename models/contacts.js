let express = require('express');
// mongoose module
var mongoose = require('mongoose');
// create a model class
var Contact = mongoose.Schema({
    name: String,
    phone: Number,
    email: String
},
{
    collection: "contacts" // the table in the database
});
// export
module.exports = mongoose.model('Contact', Contact);
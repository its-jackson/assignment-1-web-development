// mongoose module
var mongoose = require('mongoose');
// create a model class
var bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: Number,
    price: Number
},
{
    collection: "books" // the table in the database
});
// export
module.exports = mongoose.model('Book', bookModel);
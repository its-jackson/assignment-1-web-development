// mongoose module
var mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// create a model class
var User = mongoose.Schema({
    username: String,
    password: String
},
{
    collection: "users" // the table in the database
});
// Export Model
User.plugin(passportLocalMongoose);
// export
module.exports = mongoose.model('User', User);


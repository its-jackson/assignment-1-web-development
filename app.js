// express module
var express = require('express');
var app = express();

// mongoose module
var mongoose = require('mongoose');

// book database route
var contactListModel = require('./models/contacts');

// port for server 8080 if not set 
// for heroku cloud hosting
let port = process.env.PORT || 8080;

// database setup
// password = au8MwyULoOhdXRoz
// user = admin
const MONGODB_URI = 'mongodb+srv://admin:au8MwyULoOhdXRoz@cluster0.nsvts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const db = require('./db');

mongoose
.connect(MONGODB_URI || db.URI)
.catch(err => console.log(err));

var mongodb = mongoose.connection;

mongodb.on('connected', () => {
  console.log('Connected mongodb');
});

//mongodb.on('error', console.error.bind(console, 'Connection Error'));

// mongodb.once('open', ()=> {
//   console.log("Connected to MongoDB...")
// })

// view engine ejs
app.set('view engine', 'ejs');

// define the static file path
app.use(express.static(__dirname+'/public'));

// res.render to load up view file
// home page route
app.get('/', function(req, res) {

  var projects = [
    { name: 'Polymorphic Auto Woodcutter', description: "advanced AIO woodcutting script", released: 2021},
    { name: 'Motherlode Mine X', description: "advanced motherlode mine script", released: 2021},
    { name: 'Sulliuscep X', description: "advanced sulliuscep script", released: 2021}
  ];

  var tag = "'No programming concept is complete without polymorphism.'";

  res.render('pages/index', {
    projects: projects,
    tagline: tag
  });
});

// about page route
app.get('/about', function(req, res) {

  var tagline = "Also known as Polymoprhic - TRiBot";

  res.render('pages/about', {
    tagline: tagline
  });
});

// projects page route
app.get('/projects', function(req, res) {

  var tag = "'If you only knew the magnificence of the 3.'";
  var woodcutter = "Polymorphic Auto Woodcutter";
  var motherlode = "Motherlode Mine X";
  var sulliuscep = "Sulliuscep X";

  res.render('pages/projects', {
    tagline: tag,
    woodcutter: woodcutter,
    motherlode: motherlode,
    sulliuscep: sulliuscep
  });
});

// services page route
app.get('/services', function(req, res) {

  var services = [
    { service: 'Software Testing And Debugging', description: "Debug and test your software", cost: 50.00},
    { service: 'Code Consulting', description: "Consult and instruct your code", cost: 50.00},
    { service: 'Programming Fundamentals', description: "Java programming lessons ", cost: 50.00}
  ];

  res.render('pages/services', {
    services: services
  });
});

// contact page route
app.get('/contact', function(req, res) {

  res.render('pages/contact', {

  });
});

// book page route
app.get('/list', function(req, res) {

  var data = {
    name: 'Jack',
    author: 'Jack',
    published: 1998,
    price: 99.55
  }

 //bookDB.insertMany(data);

  contactListModel.find((err, ContactList) => {
    if (err) {
        return console.error(err);
    } else {
      console.log(ContactList);
      res.render('pages/list', {
        ContactList: ContactList
      });
    }
  });
});

// set listening port
app.listen(port);
console.log('Server listening on port ' + port);
// express module
var express = require('express');
var app = express();

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

  var tagline = "'No programming concept is complete without polymorphism.'";

  res.render('pages/index', {
    projects: projects,
    tagline: tagline
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

  var tagline = "'If you only knew the magnificence of the 3.'";
  var woodcutter = "Polymorphic Auto Woodcutter";
  var motherlode = "Motherlode Mine X";
  var sulliuscep = "Sulliuscep X";

  res.render('pages/projects', {
    tagline: tagline,
    woodcutter: woodcutter,
    motherlode: motherlode,
    sulliuscep: sulliuscep
  });
});

// services page route
app.get('/services', function(req, res) {

  var tagline = "";
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

// port for server 8080
app.listen(8080);
console.log('Server listening on port 8080');
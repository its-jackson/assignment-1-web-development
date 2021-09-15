// get express module
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// Define the static file path
app.use(express.static(__dirname+'/public'));

// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
  var projects = [
    { name: 'Polymorphic Auto Woodcutter', description: "advanced AIO woodcutting script", released: 2021},
    { name: 'Motherlode Mine X', description: "advanced motherlode mine script", released: 2021},
    { name: 'Sulliuscep X', description: "advanced sulliuscep script", released: 2021}
  ];

  var tagline = "'No programming concept is complete without polymorphism'";

  res.render('pages/index', {
    projects: projects,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

// port for server 8080
app.listen(8080);
console.log('Server listening on port 8080');
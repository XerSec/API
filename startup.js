#!/usr/bin/env nodejs
var express = require('express'),
  app = express(),
  port = 8080;
  mongoose = require('mongoose'),
  Save = require('./switch/models/saves/saveModel'), //created model loading here
  Title = require('./switch/models/titles/titleModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongodb/SwitchDB'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require('./switch/routes/saveRoutes')(app); //register the route
require('./switch/routes/titleRoutes')(app); //register the route
require('./switch/routes/sessionRoutes')(app); //register the route

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

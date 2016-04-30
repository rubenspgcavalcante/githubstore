var express = require('express');
var bodyParser = require('body-parser');
var loader = require('node-glob-loader');

var persitence = require('./app/core/persistence');
var routerProvider = require('./app/core/router-provider');

//Preload application components
loader.load('./app/models/*.model.js');
loader.load('./app/services/*.service.js');
loader.load('./app/controllers/*.controller.js');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var apiPath = '/api';

app.use(apiPath, routerProvider);
app.listen(port);

console.info("Listening on port " + port);
console.info("For REST api use base path " + apiPath + '/{entity}');
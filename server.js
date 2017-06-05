var express = require('express'),
	restful = require('node-restful'),
	mongoose = restful.mongoose;

var app = express();
app.configure(function(){
	app.user(express.bodyParser());
	app.use(express.methodOverride());
});

mongoose.connect('mongodb://localhost/restful');

var ProductSchema = mongoose.Schema({
	name: String,
	sku: String,
	price: Number
});
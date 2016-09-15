var express = require('express');

//create app
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(3000, function(){
	console.log('express server is up on port 3000 ', __dirname);
})
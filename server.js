var express = require('express');

//create app
var app = express();
const PORT = process.env.PORT || 4000;

app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'https'){
		conslole.log('http://'+req.hostname + req.url);
		res.redirect('http://'+req.hostname + req.url);
	}
	else{
		next();
	}
});

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.listen(PORT, function(){
	console.log('express server is up on port  ', PORT);
})
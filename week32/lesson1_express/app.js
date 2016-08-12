var express = require('express');
var app = express();
app.get('/',function(req,res){
	var infoHello = 'hellosss world!';
	res.writeHead(200,{
		'Content-Length':infoHello.length,
		'Content-Type':'text/plain'
	});
	res.end(infoHello);
});
app.listen(3000);

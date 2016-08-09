var express = require('express');
var app = new express();
var morgan = require('morgan');
app.use(morgan());
app.use(express.static('./public'));
app.get('/',function(req,res){
	res.end("一堆乱码");
});
app.route('/article')
	.get(function(req,res){
		res.end('route /article get\n');
	})
	.post(function(req,res){
		res.end('route /article post\n');
	});
app.listen('1800',function(){
	console.log("express running on localhost:1800");
});



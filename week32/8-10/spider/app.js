var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
app.get('/',function(req,res){
	request('http://www.henanese.top/',function(error,response,body){
		if(!error && response.statusCode == 200){
			$ = cheerio.load(body);
			res.json({
				'Classnum':1
			});
			console.log(body);
		}
	});
});
app.listen(3000);

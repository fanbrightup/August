
var express = require('express');
var utility = require('utility');
var app = express();

app.get('/',function(req,res){
	if(req.query.wd!=null){
	res.writeHead(200,{
		'Content-Type':'text/plain'});
	var wd = req.query.wd;
	var md5Value = utility.md5(wd);
	var sha1 = utility.sha1(wd);
	res.write("要查寻的字符为md5值为",'utf8');
	//res.write("md5的值为",'utf8');
	res.write(md5Value+'\n');
	//res.write('sha1的值为'+sha1);
	res.write(sha1);
	res.end();
	}else {
	res.send('没有数据');
}
	
});
app.listen(3000,function(req,res){
	console.log('app is running at port 3000');
});

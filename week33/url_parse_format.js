var url = require('url');

var obj = url.parse('http://localhost:8080/demo/index.html\
?name=xiaoming&pwd=12345',true,false);

console.log(obj);

var str = url.format({
	
	host:'localhost:8080',
	port:8080,
	query:'name=xiaoxiao',
	protocol:'http',
	pathname:'/demo/index22.html'});

console.log(str);

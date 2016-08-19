var http = require('http');
var server = http.createServer();



server.on('request',function(req,res){
	console.log("接收到新的请求");
//	res.write("hello one");
//	res.end();

//	server.colse（）方法可以定义关闭事件，只允许一个连接，第二个不能连接
	server.close(()=>{console.log('禁止新的连接')});

});

//	当触发close时，响应
server.on('close',()=>{console.log('denied');});

server.listen(3000,function(err){
	
	if(err)
		{console.log("something error!");}
});

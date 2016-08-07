var http = require('http');
var port = 8080;
var hostname = '127.0.0.1';
var server = http.createServer((req,res)=>{
  res.statusCode = 200;
  res.setHeader('content-type','text/plain');
  res.end("hello world");
}).on('error',function(){});
server.listen(port,hostname,()=>{
  console.log('服务运营于my:8080端口')
});

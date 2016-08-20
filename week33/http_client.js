var http = require('http');
var data = 'my message';
var options = {
        host:'127.0.0.1',
        port:3000,
        method:'POST',
        headers:{
                'Content-Type':'application/x-www-form-urlencoded',
                'Content-Length':data.length
        }
};
var requestCallback = (im)=>{
	var serverData = '';
	im.on('data',(data)=>{serverData += data;});
	im.on('end',()=>{console.log(serverData);});
};

var req = http.request(options,requestCallback);
req.on('error',(e)=>{console.log(e.message);});

req.write(data);
req.end();

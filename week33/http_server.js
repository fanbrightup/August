var http = require('http');


http.createServer((req,res)=>{
	if(req.method.toUpperCase() == 'POST'){
		var postData = '';
		
		req.on('data',(data)=>{
			postData += data;
		});
		req.on('end',()=>{	
			console.log(postData);
		});
	}
	else if(req.method.toUppercase() == 'GET'){
		console.log('暂时不处理');
	}else{
		console.log('其他请求');
	}

	res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
	res.write('I have get your message');
	res.end();
}).listen(3000,()=>{
		console.log('listen on 3000');
	});






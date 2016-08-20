
var fs = require('fs');
var readStream = fs.createReadStream('./srcDemo/a.txt');
var writeStream =  fs.createWriteStream('./demo/b.txt');
//	回调函数只有一个参数chunk，表数据
readStream.on('data',(data)=>{

		if(writeStream.write(data) === false){
			readStream.pause();
		}
	});

writeStream.on('drain',()=>{readStream.resume();});
		
readStream.on('end',()=>{
		writeStream.end();
	});

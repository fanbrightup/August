var fs = require('fs');
fs.readFile('./test.txt','utf8',(err,data)=>{
	if(!err){
		console.log(data);
	}else{
		console.log(err.message);
	}
});

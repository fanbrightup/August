var fs = require('fs');
//	创建文件夹
fs.mkdir('/usr/test',(err)=>{
	if(err){
		console.log(err.message);
	}else{
		console.log('创建成功');
	}
});
//	删除文件夹
fs.rmdir('./test',(err)=>{
	if(err){
		console.log(err.message);
	}else{
		console.log('删除成功');
	}
});

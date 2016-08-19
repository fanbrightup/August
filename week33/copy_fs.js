var fs = require('fs');
var destPath = './demo/';
var srcPath = './srcDemo/';
var srcFileName = 'a.txt';
var destFileName = 'b.txt';
//	通过exists（）判断文件是否存在
fs.exists(srcPath+srcFileName,function(exist){
	if(!exist){	
		console.log('目标不存在');
	}else{
//		判断目标文件夹是否存在，一定要使用同步方法，否则逻辑会出错
		if(!fs.existsSync(destPath)){
			fs.mkdirSync(destPath);
	}
//	读取完之后通过回调函数来写入目标文件，适合于小文件的复制
	fs.readFile(srcPath+srcFileName,function(err,data){
		fs.writeFile(destPath+destFileName,data,function(err){
			if(err){
				console.log('file write error!!!!!!');
			}
		})
	})
}
});

#!/usr/bin/env node
var fs = require('fs');
var args = require('minimist')(process.argv.slice(2));
if(args.v || args.version ){
	console.log('\033[36m\033[40mv1.0.0\033[0m');
}else if(args.h || args.help){
//	使用异步方式读取文件
	//fs.createReadStream('./usage.txt').pipe(process.stdout);
//	使用同步方式读取文件	
	console.log(fs.readFileSync('./usage.txt','utf8'));
}
console.log(args);



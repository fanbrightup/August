var fs = require('fs');
//	异步方法	
fs.exists('./test',(bool) => {	console.log(bool)});
//	同步方法	
console.log(fs.existsSync('./test'));

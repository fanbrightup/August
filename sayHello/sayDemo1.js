#!/usr/bin/env node
var fs = require('fs');
var args = require('minimist')(process.argv.slice(2));
if(args.v || args.version ){
	console.log('v1.0.0');
}else if(args.h || args.help){
	fs.createReadStream('./usage.txt').pipe(process.stdout);
}
console.log(args);



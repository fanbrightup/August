var fs = require('fs');
function FileObject(){
	this.filename = null;
	this.exists = function(callback){
	//	var self = this;
		console.log("attempting to verify:"+this.filename);
		fs.open(this.filename,'r',function(err,handle){
			if(err){
				console.log(this.filename+"dose Not exist");
				callback(false);
			}else{
				console.log(this.filename+"does Indeed exist");
				callback(true);
				fs.close(handle);
			}
		});
	};
}
var fo = new FileObject();
fo.filename = 'AAAAAAA';
fo.exists(function(does_it_exist){
	console.log("results from exists:"+does_it_exist);
});

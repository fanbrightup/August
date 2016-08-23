class Point {
	
	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	toSayHi(){
		console.log('hi');
	};	
	toString(){
		return '(' + this.x + ',' + this.y + ')';
	}
}
console.time('控制台计时一');
console.warn(typeof Point);
console.info(Point === Point.prototype.constructor);
console.timeEnd('控制台计时一');

function OldPoint(x,y) {
	this.x = x;
	this.y = y;
}
OldPoint.prototype.toString = function(){
	return '(' + this.x + ',' + this.y + ')';
}

console.log(new  OldPoint('你','好').toString());

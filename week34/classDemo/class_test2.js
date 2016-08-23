const MyClass = class Me { 
	getClassName(){
		return Me.name;
	}
};
var my = new MyClass();
//	console.log(my.getClassName());
let inst = new MyClass();
console.log(inst.getClassName());
//	console.log(Me.name);


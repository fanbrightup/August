var regular_joe = 'I am global!';

function prison(){
	prisoner = 'I am local';
}
{
	let var1 = 1;
	var2 = 2;
}
for(var var3 =3;3 > 4;){
}

prison();
console.log(regular_joe);
console.log(prisoner);
console.log(var1);
console.log(var2);
console.log(var3);

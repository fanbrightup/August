setTimeout(function(){
	try{
		throw new Error("Danger Zone");
	}catch(e){
		console.log("I caught ");
		console.log(e.message);
	}
}
,2000);

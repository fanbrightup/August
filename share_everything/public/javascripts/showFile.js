var fs = require('fs');
function show_myfile(dirname){
  var files = fs.readdirSync(dirname);
  // var files = fs.readdirSync('../images/');
  for(let name in files){
    console.log(files[name]);
  }
}
// show_myfile('/home/my/Desktop/August/share_everything/public/images');
show_myfile('../images');

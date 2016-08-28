var fs = require('fs');

var files = fs.readdirSync('/home/my/Desktop/August/share_everything/public/images');
// var files = fs.readdirSync('../images/');
for(let name in files){
  console.log(files[name]);
}

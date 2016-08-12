var request = require('request');

request('http://itbilu.com/javascript/js/EkixiHnR.html',function(err,res,body){
  if(!err && res.statusCode == 200){
    console.log(body);
  }
});

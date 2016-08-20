var qs = require('querystring');

var str = qs.stringify({name:'xiaoming',age:18,gender:'男'});
console.log(str);

var obj = qs.parse('name=xiaoqiang&pwd=12345&age=18');
console.log(obj);

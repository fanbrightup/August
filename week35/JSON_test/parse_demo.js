var str = '{"name":"Goo","age":26}';
var obj = JSON.parse(str,fun);
function fun(name,value){
//  似乎是没法修改键名

  if(value==26){
       name = "ab";
  }
  return value ;
}
console.log(obj);

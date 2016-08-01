function Stack(){
  var item = [];
  this.pop = function(){
    return item.pop();
  }
  this.push = function(variable){
    item.push(variable);
  }
  this.peek = function(){
    return item[item.length-1];
  }
  this.clear = function(){
    item = [];
  }
  this.size = function(){
    return item.length;
  }
  this.isEmpty = function(){
    return item.length == 0;
  }
  this.print = function(){
    console.log(item.toString());
  }
}
module.exports = Stack;

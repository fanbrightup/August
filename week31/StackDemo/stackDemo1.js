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
  var myStack = new Stack();
  console.log(myStack.isEmpty());
  myStack.push("1");
  myStack.push(2);
  console.log(myStack.size());
  myStack.peek();
  myStack.pop();
  myStack.print();

var Queue = require("./Queue.js");
function hotPotato(nameList,num){
  var queue = new Queue();
  for(var i = 0;i<nameList.length;i++){
    queue.enqueue(nameList[i]);
  }
  queue.print();
  console.log(queue.size());
  var eliminated ;
  while(queue.size() > 1){
    for(var i = 0;i<num;i++){
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + '在击鼓传花中被淘汰');
  }
  return queue.dequeue();
}

var names = ['John','Jack','Camila','Ingrid','Carl'];
var winner = hotPotato(names,7);
console.log('胜利者',winner);

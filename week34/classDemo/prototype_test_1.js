class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '('+this.x+', '+this.y+')';
  }

}
console.log(Point.name);
var p1 = new Point(2, 3);
var p2 = new Point(3,2);
//	console.log(p1.__proto__ === p2.__proto__);

p1.__proto__.printName = ()=> {console.log('hehe这是公用方法')};
p1.printName();
p2.printName();

var p3 = new Point(4,2);
p3.printName();

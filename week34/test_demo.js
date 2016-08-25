var a = 'window';
function test(){
    console.log('this test a:' +a);
    var a = 'func';
}
test();
console.log('this window a:' + a);
// this test a:undefined
// this test a:window




var mysql = require('mysql');
var options = {
  host:'fanbright.gotoftp11.com',
  user:'fanbright',
  password:'fan15308011744',
  database:'fanbright'
};
var connection = mysql.createConnection(options);
connection.connect();
connection.query('select * from mytable1;',function(err,rows,fields){
  if(err){
    throw err;
  }
  for(var i = 0;i<10;i++){
  console.log('查询到的结果为'+rows[i].id+'  '+rows[i].querystring);
}
});
connection.end();

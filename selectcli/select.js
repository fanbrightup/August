#!/usr/bin/env node
var mysql = require('mysql');
var options = {
  host:'fanbright.gotoftp11.com',
  user:'fanbright',
  password:'fan15308011744',
  database:'fanbright'
};
var connection = mysql.createConnection(options);
connection.connect();
connection.query('select * from mytable1',function(err,row,field){
  if(err){
    console.log(err.message);
  };
  for(let i = 0;i < 10 ;i++){
    console.log(row[i].id+' '+row[i].querystring);
}

});
//  必须要关闭
connection.end();

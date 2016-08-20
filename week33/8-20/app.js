var express = require('express');
//  引入body-parser
var bodyParser = require('body-parser');
var app = express();

//  提供
app.use('/static',express.static(__dirname+'/public'));
// app.use(express.static(__dirname+'/public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.render('<h1>hello</h1>');
})

app.get('/get',(req,res)=>{
  // res.write('姓名是：'+req.query.name);
  // res.write('密码是：'+req.query.password)；

  //  一定要加上__dirname，否则找不到
  res.sendFile(__dirname+'/hehe.html')
  // res.send('GET方法');
});

app.post('/mypost',(req,res)=>{

  res.send('POST方法');
});

app.listen(3100,(err)=>{
  console.log('Listen on 3100');
});

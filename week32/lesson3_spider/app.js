//  实现了从tuicool网站首页,爬取连接字段等于四的所有链接及地址
//  解决了困扰我两天的res.write()输出乱码问题
//  解决了输出换行的问题<br>,对request有了一些认识
//  request中的res没有res.write(),res.end()等功能,res中似乎也是网页元素内容,不过格式不如body整齐

var express = require('express');
var cheerio = require('cheerio');
var request = require('request');

var app = express();
app.get('/', function (req, res, next) {


request('http://www.tuicool.com/',function(err,response,body){
      if(!err && response.statusCode == 200){
        var items = [];
          var $ = cheerio.load(body);
          $('a').each(function (idx, element) {
            var $element = $(element);
            if($element.text().length == 4){
            items.push({
              text: $element.text(),
              href: $element.attr('href')
            });
          }
          });
          //  加上这句就解决了乱码问题
          res.write('<head><meta content="text/html"  charset="utf8"/></head>');
          // for(var key in items){
          //   //  在输出中使用'/n'不起效果,要使用<br>来输出,到文档流中,产生换行
          //   res.write(items[key].text +'  '+items[key].href +"<br>");
          // }
          // res.end();
          console.log(response);
          res.end()


        }
  });
})
app.listen(3000);

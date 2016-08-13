var request = require('request');
var cheerio = require('cheerio');

request('http://www.tuicool.com/',function(err,res,body){
  if(!err && res.statusCode == 200){
    var $ = cheerio.load(body);
    var items = [];
      $('a').each(function (idx, element) {
        var $element = $(element);
        if($element.text().length == 4){
        items.push({
          text: $element.text(),
          href: $element.attr('href')
        });
      }
      });
      console.log(res);
      // console.log(items);
      // res.end(items);
      // res.write(items);
      // res.write('he');
      // res.end();
  }
})

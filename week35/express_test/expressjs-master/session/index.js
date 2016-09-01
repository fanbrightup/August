var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var app = express();

app.use(session({
    store: new RedisStore({
        host: '127.0.0.1',
        port: '6379'
    }),
    secret: 'maiziedu'
}))

app.get('/', function(request, response, next) {
    var id = request.session.userId;
    // console.log(id);
    response.send('User ID is:' + id);
});

app.get('/:id', function(request, response, next) {
    var id = request.params.id;
    console.log('id:' + id);
    request.session.userId = id;
    response.send('hello world\n');
});


app.listen(1234);

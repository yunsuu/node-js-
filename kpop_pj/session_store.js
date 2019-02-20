var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var app = express()

var options = {

};

var sessionStore = new MySQLStore(options);

app.use(session({
    secret: 'asadlfkj!@#!@#dfgadg',
    resave: false,
    saveUninitialized: true,
    store: sessionStore
}))

app.get('/', function(req, res) {
    console.log(req.session);
    if (req.session.num === undefined) {
        req.session.num = 1;
    } else {
        req.session.num = req.session.num + 1;
    }
    res.send(`Views : ${req.session.num}`);
})

app.listen(3000, function() {
    console.log('3000!');
});
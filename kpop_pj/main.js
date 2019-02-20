//import
var express = require('express');
var app = express();
var mysql = require('mysql');
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet');
var session = require('express-session');
var moment = require('moment');
var MySQLStore = require('express-mysql-session')(session);
var template = require('./views/template.js');


//session store
var session_store_options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'ljsql934',
    database: 'kpop'
};
var sessionStore = new MySQLStore(session_store_options);


//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.use(session({
    secret: 'dnfsdfsadfasd',
    resave: false,
    store: sessionStore,
    saveUninitialized: true
}));
//현제 로그인 상황인지 아닌지 확인
app.get('*', function(request, response, next) {
    if (typeof(request.session.is_logined) === 'undefined') {
        request.is_logined = false;
    } else {
        request.is_logined = true;
    }
    next();
});


//database connect
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ljsql934',
    database: 'kpop'
});
db.connect();


//function
var create_login_session = function(request, response, user_list) {
    var logined = false;
    post = request.body;

    for (var i in user_list) {
        if (post.id === user_list[i].user_id && post.pwd === user_list[i].user_pwd) {
            logined = true;
            var nickname = user_list[i].nickname;
            var user_idx = user_list[i].user_idx;
            break;
        }
    }
    if (logined === true) {
        post = request.body;
        request.session.is_logined = true;
        request.session.nickname = nickname;
        request.session.user_idx = user_idx;
        //#######################################
        response.send(`
        <script>
            alert('Login is sucess');
            window.location.href = '/';
        </script>`);
    } else {
        response.send(`
        <script>
            alert('Login is failed');
            window.location.href = '/';
        </script>`);
    }
}

//routers
app.get('/', function(request, response) {
    var login_status = request.is_logined;
    var contents = template.index;
    var html = template.nav_template(contents, login_status);
    response.send(html);
});

app.get('/login', function(request, response) {
    var login_status = request.is_logined;
    var contents = template.login;
    var html = template.nav_template(contents, login_status);
    response.send(html);
});

app.post('/login_process', function(request, response) {
    db.query("SELECT user_idx, nickname, user_id, user_pwd FROM user", function(err, result, fields) {
        if (err) throw err;
        create_login_session(request, response, result);
    });
});

app.get('/sign_up', function(request, response) {
    var login_status = request.is_logined;
    var contents = template.sign_up;
    var html = template.nav_template(contents, login_status);
    response.send(html);
});

app.get('/tour', function(request, response) {
    var login_status = request.is_logined;
    var contents = template.tour;
    var html = template.nav_template(contents, login_status);
    response.send(html);
});

app.get('/forum', function(request, response) {
    db.query("SELECT forum_idx, title, author_nickname, views, date FROM forum1", function(err, result, fields) {

        if (err) throw err;
        var post = '';
        for (var i in result) {
            var date = moment(result[i].date).startOf().fromNow();
            post = post + template.post_template(result[i].forum_idx, result[i].title, result[i].author_nickname, date, 0);
            //console.log(result[i].forum_idx, result[i].title, result[i].author_nickname, date, 0);

        }
        //console.log('포스트', post);
        var login_status = request.is_logined;
        var contents = template.forum_template(post);
        var html = template.nav_template(contents, login_status);
        response.send(html);
    });
});

app.get('/forum1/:idx', function(request, response) {
    var login_status = request.is_logined
    console.log('forum1 접속');

    var html = '';
    var post_idx = request.params.idx;
    var title = '';
    var author = '';
    var date = '';
    var views = 0;
    var description = '';
    var form_action = '';
    var comments = '';

    //일단 게시판만 내용만 띄우기
    db.query(`SELECT * FROM forum1`, function(err, result, fields) {
        if (err) throw err;
        for (var i in result) {
            //console.log(result[i].forum_idx, post_idx);
            if (result[i].forum_idx == post_idx) {
                title = result[i].title;
                author = result[i].author_nickname;
                date = moment(result[i].date).startOf().fromNow();
                views = 0;
                description = result[i].description;
                html = template.des_template(post_idx, title, author, date, views, description, form_action);
                html = html +
                    `<div class="my-3 p-3 bg-white rounded box-shadow">
                <h6 class="border-bottom border-gray pb-2 mb-0">Comments</h6>`;
                //console.log(html);
                break;
            }
        }

        db.query(`SELECT * FROM forum1_comment`, function(err, result, fields) {
            for (var i in result) {
                console.log(result[i].article_id, post_idx);
                if (result[i].article_id == post_idx) {
                    comments = comments + template.comment_template(result[i].author_nickname, result[i].description, date, 0);
                }
            }

            html = html + comments + `<small class="d-block text-right mt-3">
            <a href="#">All suggestions</a>
                </small>
            </div>`;
            html = template.nav_template(html, login_status);
            response.send(html);
        });
    });
});

app.get('/write_des', function(request, response) {
    if (!(session.is_logined)) {
        response.send(`
        <script>
            alert('You need to login first');
            window.location.href = '/';
        </script>`);
    } else {
        var login_status = request.is_logined;
        var contents = template.write_des;
        var html = template.nav_template(contents, login_status);
        response.send(html);
    }
});

app.post('/add_comment_process/:idx', function(request, response) {
    post = request.body
    session = request.session;
    var idx = request.params.idx;
    console.log(session.is_logined);

    if (!(session.is_logined)) {
        response.redirect(`/login`);
    } else {
        db.query(`INSERT INTO forum1_comment (article_id, author_id, author_nickname, description, created_at, updated_at) 
        VALUES(?, ?, ?, ?, NOW(), NOW())`, [idx, session.user_idx, session.nickname, post.comment], function(err, result) {
            if (err) throw err
            response.redirect(`/forum1/${idx}`);
        });
    }
});

app.post('/write_des_process', function(request, response) {
    //데이터 받아서 올리기
    var idx = request.params.idx;
    post = request.body;
    session = request.session;
    console.log('aaaaaaaaaaaa');

    db.query(`INSERT INTO forum1 
    (title, description, author_id, author_nickname, date, created_at, updated_at) 
    VALUES(?, ?, ?, ?, NOW(), NOW(), NOW());
    `, [post.title, post.description, session.user_idx, session.nickname],
        function(error, result) {

            if (error);
            /*
            else {
                db.query("SELECT forum_idx FROM forum1 ORDER BY forum_idx DESC limit 1", function(err, result, fields) {
                    console.log('forum_idx 출력', result[0].forum_idx);
                    db.query(`INSERT INTO forum1_comment (article_id) VALUES(?)`, [result[0].forum_idx], function(err, result, fields) {
                        if (err) throw err;
                        response.redirect('/forum');
                    });
                });
                
            }
            */
            response.redirect('/forum');
        });
});

app.post('/sign_up_process', function(request, response) {
    post = request.body
    if (post.pwd !== post.re_pwd) {
        response.send(`
        <script>
            alert('Password in incorrect!');
            window.location.href = '/sign_up';
        </script>`);
    } else {
        db.query(`INSERT INTO user (nickname, user_id, user_pwd, created_at) VALUES(?, ?, ?, NOW());`, [post.nickname, post.id, post.pwd],
            function(error, result) {
                if (error) {
                    console.log('Mysql err');
                    throw error;
                } else {
                    response.send(`
                    <script>
                        alert('Sign up is sucess!');
                        window.location.href = '/';
                    </script>`);
                    console.log('sign up sucess!');
                }
            });
    }
});

app.get('/logout_process', function(request, response) {
    request.session.destroy(function(err) {
        if (err) {
            response.send(err);
        } else {
            response.redirect('/');
        }
    })
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
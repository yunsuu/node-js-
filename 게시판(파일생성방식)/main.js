var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
function templateHTML(txt_list) {
  template = `<!DOCTYPE html>
  <html lang="ko" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title>게시판 연습</title>
      <style>
        table {
         width: 100%;
         border: 1px solid #333333;
       }
       .c {
          border-spacing: 10px;
        }
      </style>
    </head>
    <body>
      <h1>게시파아아아아안!</h1>
      <table class="forum">
        <tr>
          <th>no</th>
          <th>title</th>
        </tr>
        ${txt_list}
      </table>
      <input type="button" name="submit" value="글쓰기" onclick="location.href='/create'">
    </body>
  </html>`;

  return template;
}
function templateDES(title, description){
  template = `
  <!DOCTYPE html>
  <html lang="ko" dir="ltr">
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
    </head>
    <body>
      <h1>${title}</h1>
      <p>${description}</p>
      <input type="button" value="홈으로 가기" onclick="location.href='/'">
    </body>
  </html>
  `;
  return template
}
var app = http.createServer(function(request, response) {
  //url(주소)를 받아온다 -> 받아온 주소의 id값 등을 이용해
  //파일명을 찾는등 여러 작업을 할 수 있다.
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var pathname = url.parse(_url, true).pathname;
  console.log(pathname);
  //data 폴더 읽기
  if(pathname === '/'){
    if(queryData.id === undefined){
      fs.readdir('./data', function(error, filelist) {
        txt_list = ``;
        for (i = 0; i < filelist.length; i++) {
            txt_list = txt_list + `<tr>`;
            txt_list = txt_list + `<th>${i+1}</th>`;
            txt_list = txt_list + `<th><a href="/?id=${filelist[i]}">${filelist[i]}</a></th>`;
            txt_list = txt_list + `</tr>`;
        }
      response.writeHead(200);
      response.end(templateHTML(txt_list));
    });
  }
    else{
        console.log('게시판 글!');
        fs.readFile(`./data/${queryData.id}`, 'utf8', function(err, description){
        title = queryData.id;
        output = templateDES(title, description);
        response.writeHead(200);
        response.end(output);
      });
    }
  }
  else if(pathname === '/create'){
    form =`
    <!DOCTYPE html>
    <html lang="ko" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>글쓰기</title>
      </head>
      <body>
        <h1>글쓰기</h1>
          <form action="http://localhost:3000/create_process" method="post">
            <p><input type="text" name="title"></p>
            <p><textarea name="description"></textarea></p>
            <p><input type="submit"></p>
          </form>
      </body>
    </html>
    `
    response.writeHead(200);
    response.end(form);
  }
  else if(pathname === '/create_process'){
      var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          var title = post.title;
          var description = post.description;
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end();
          })
      });
    }
  else{
    response.writeHead(404);
    response.end('Not found');
  }
});



app.listen(3000);

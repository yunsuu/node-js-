var express = require('express')
var app = express()
app.use(express.static('public'));


var html_a = `
<!DOCTYPE html>
<html lang="ko" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>example</title>
    <link rel="stylesheet" type="text/css" href="semantic/semantic.min.css">
    <script
        src="https://code.jquery.com/jquery-3.1.1.min.js"
        integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
        crossorigin="anonymous">
    </script>
    <script src="semantic/semantic.min.js"></script>
  </head>
  <body>
    <div class="ui sidebar inverted vertical menu">
      <a class="item">
        1
      </a>
      <a class="item">
        2
      </a>
      <a class="item">
        3
      </a>
    </div>
    <div class="pusher">
      <!-- Site content !-->
      <button id="menu" class="ui button">Follow</button>

    </div>
    <script>
      $('#menu').click(function(){
        $('.ui.sidebar').sidebar('setting', 'transition', 'overlay').sidebar('toggle');
      });
    </script>
  </body>
</html>`;

app.get('/', function(req, res) {
    res.send(htm_al);
})

app.listen(3000, function() {
    console.log('3000!');
});
var express = require("express");
var bodyParser = require("body-parser")
var path = require('path');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + "./static")));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
  response.render('index');
});


app.post('/results', function(req, response) {
  console.log(req.body);
  response.render('results',{results: req.body});
});

app.listen(8000, function(){
  console.log("listening on 8000");
});

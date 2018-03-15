var express = require('express');
var app = express();
var Twitter = require('twitter');
var client = new Twitter({

 consumer_key: 'bqbudmaviN9Si55v1zR4sWo6c',
 consumer_secret: 'SFffqBoj8NikupjUl7oE95o6RUVhQRkJLJ9qduvF8v98zN05wb',
 access_token_key: '578384873-1gZKSQhujTrisUwuUwXr8efwNbMaO8ugWP11rg8Y',
 access_token_secret: 'PJD6YgPKuQLAVvBUQbIvWfL3GL5VrmmfbM8628ESSppBh'
});
app.use(express.static('public'))
app.get('/', function(req, res){
 res.send("Hello world! by express");
});
app.listen(8080);

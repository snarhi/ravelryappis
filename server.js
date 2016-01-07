var express = require('express')
var app = express()

//get json from server
app.get('/', function (req, res) {
  	res.sendFile(__dirname + '/public/example.json')
})

app.use(express.static(__dirname +'/public'));

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

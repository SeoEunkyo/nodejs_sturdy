var http = require('http');
var fs = require('fs');

//create a server object:
http.createServer(function (req, res) {

  var url = req.url;
  
  if (req.url == '/') {
    url = '/index.html';
    res.end(fs.readFileSync(__dirname + url));
  }

  console.log('client 접속');
  //res.write(); //write a response to the client
   //end the response

}).listen(8080); //the server object listens on port 8080
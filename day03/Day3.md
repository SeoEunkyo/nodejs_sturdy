## URL 라우팅 해보기.

Day2를 해결하셨다면 기존의 것을 변경하셔도 되고 . 아래의 것을 사용해도 됩니다.  깃허브에 소스가 완전히 올라가 있으니 참조하시면 됩니다.
~~~
var  http = require('http');
var  fs = require('fs');
//create a server object:
http.createServer(function (req, res) {
var  url = req.url;
if (req.url == '/') {
console.log('url : ' + url);

url = '/index.html';
res.end(fs.readFileSync(__dirname + url));
}
console.log('client 접속');
//res.write(); //write a response to the client
//end the response
}).listen(8080); //the server object listens on port 8080
~~~
코드의 변수를 보시면 req의 변수에 url이 담겨져 있는것을 알 수 있습니다. 

----
과제 
localhost:8080/login이라고 크롬에서 입력하게 된다면 간단한 로그인 화면이 보이드록 만들어 주세요.


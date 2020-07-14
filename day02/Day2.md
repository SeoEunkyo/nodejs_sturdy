### nodejs ??
** 백엔드를 개발 하기 위한것 -> **웹 서버로 사용 가능**. 프론트 개발을 하던 사람에게도 쉽게 접근이 가능하다.  


그럼 이제 웹 서버를 실행 시켜보자. 
(express는 나중에 다루도록 하겠습니다.) 

1. 우선 폴더를 만들고 그 폴더 안에 index.js 파일을 만들고  아래의 소스를 붙여 넣기 합니다.
~~~
var  http = require('http');
//create a server object:

http.createServer(function (req, res) {
console.log('왜 두번씩 consol에 찍힐까요 ? 같이 고민');
res.write('Hello World!'); //write a response to the client
res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
~~~
그리고 cmd 창에서 파일경로로 이동 후 node index.js라고 칩니다, 크롬에서 localhost:8080으로 들어가게 되면  helloworld라는것을 볼 수 있을것입니다.  이렇게 하나의 서버가 간단히 만들어집니다.
-->  접속시 콘솔창도 한번 확인 해주세요.

2. 이제 페이지를 html 형식을 이용하여 좀더 웹 처럼 보이게  만들어 보겠습니다.  아래의 코드를 와 같이 변경해봅니다.
~~~
var  http = require('http');
//create a server object:
http.createServer(function (req, res) {
console.log('client 접속');

res.write(`
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>My test page</title>
</head>
<body>
<h1>Random Photo from picsum</h1>
<img src="https://picsum.photos/400" alt="The Firefox logo: a flaming fox surrounding the Earth.">
<p>https://picsum.photos/400</p>
<ul> <!-- changed to list in the tutorial -->
<li>technologists</li>
<li>nature</li>
<li>people</li>
</ul>
<p>let's sturdy togather...</p>
</body>
</html>
`); //write a response to the client
res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
~~~

이제 다시 localhost:8080 페이지로 들어가봅니다.. 조금 바뀌였죠.

--------------
과제??? 
1. 위에서 console.log('왜 두번씩 consol에 찍힐까요 ? 같이 고민'); 두번씩 찍히는 이유 찾아보기 . 
2. 위 2번에서 html을 파일로 만들고 fs 패키지를 이용하여 만들 파일을 이용하여 웹에 띄워봅시다.
[https://www.w3schools.com/nodejs/nodejs_filesystem.asp](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
3. nodejs의 대표적인 특징인 event driven 방식에 대한 공부는 다음에 같이 해보겠습니다. 






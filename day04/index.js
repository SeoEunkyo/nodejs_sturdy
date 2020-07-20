var http = require('http');
const paserurl = require('url');


//create a server object:
http.createServer(function (req, res) {
  const { headers, method, url } = req; // es6 문법입니다...모르겠으면 카톡


  const pathname = paserurl.parse(url, true).pathname;

  if (pathname == '/') {
    if (method == 'GET') {
      console.log('method : ', method); // 자 여기 까지 GET
      console.log('url : ', url);
      const queryObject = paserurl.parse(url, true).query; // url을 파싱 해줍니다. object 형식 리턱
      
      var name = 'guest'
      var title = 'No Title'
      if(queryObject.name)
        name = queryObject.name
      if(queryObject.title)
        title = queryObject.title
      
      console.log('queryObject : ', queryObject);
      res.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>My test page</title>
      </head>
      <body>
        <h1>Welcom..  ${name} </h1>
        <h1>title :   ${title} </h1>
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
    `)
    }
    else {
      console.log('method : ', method);
    }

  } else {
    console.log('url : ', url);

  }

}).listen(8080); //the server object listens on port 8080
console.log('server start.... port : 8080');

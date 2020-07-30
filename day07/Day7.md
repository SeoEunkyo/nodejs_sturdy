## jade 템플릿
jade는 view 템플릿으로 express 패키지가 기본적으로 내장하고 있습니다. 즉 jade 문서를 html로 변경합니다.  그렇기에 익숙해 진다면 조금 더 팔리 html문서가 간단하게 작성이 가능하고, 랜더할때 변수를 쉽게 치환 가능 하게 해줍니다. 

여기에 예제 코들이 있으니 참고 하면된다.
[http://jade-lang.com/reference/code](http://jade-lang.com/reference/code)
jade를 사용하기 위해서 우선 jade Package를 설치한다. 
```
npm install jade -- save
```
여기서 --save는 명령에 설치 폴더 내에 패키지를 설치한다는것이다. 만얀 global로 설치 하게 된다면 .. 컴퓨터에 전체에 설치가 된다. 글로벌로 설치 하고 싶다면 좀 더 신중하는것이 좋다. 

jade를 사용하기 위해서  아래와 같은 코드를 추가해야한다.
```
app.locals.pretty = true; // jade 파일을 사람이 보기 좋게 변경
app.set('view engine', 'jade'); // view engine으로 jade를 사용하겠다
app.set('views', './views'); // jade 디렉토리 경로 설정
```
변수를 치환하는 방식이 아래와 같이 변경되었다.
```
res.render('jade_templet', {_title1:listSample[0].title, _description1:listSample[0].description ,_title2:listSample[1].title, _description2:listSample[1].description});
```
_title`은 jade파일에 내에서 #{_title1} 가 된다는것을 쉽게 유추 할수 있다.

이제 Day07폴더 내에 jade_templet.js 파일을 실행시켜보자.

------
QnA 
1. req 파라미터에 대해서 ?
- req(request)는 client에서 요청에 관련된 정보와 함수들이 들어가 있다. 예로 요청 url path 및  header 정보 body 정보가 대표적이라 볼 수 있다. 
기존에 http와 express 내용은 다르다.  Docs를 혹인 해볼수 있다. [express.req](http://expressjs.com/ko/api.html#req) vs  [http.req](https://nodejs.org/api/http.html#http_class_http_clientrequest)


--- 
Todo 
1. jade에는 반복문을 사용할수 있는데 그것을 사용하여 기존의 코드를 변경해 보자. 
2. Add 버튼이 작동 안하는데 그것을 작동하게 하고 입력 페이지를 이동시켜 title , description, preview, pic(url)을 입력 받고 save를 누리면 list로 이동 시켜서 방금 추가 한 내용 또한 리스트로 추가 시켜서 보여주고, cancel 시에는 추가 없이 list 페이지로 이동하게 한다. (jade 형식으로 add 페이지를 만드셔야합니다.)
3. list 옆의 Des버튼을 눌렸을 때 Des 페이지로 이동하고 상세 내역도 보여주세요.
4. list 페이지에 삭제 버튼도도 만들고 list를 한번 삭제 시켜보세요. ( 삭제버튼을 누른 후 페이지를 새로고침 하였을때 삭제 되게 하면 됩니다.)


const express = require("express");  
const bodyParser = require("body-parser");  
const app = express();  
  
app.use(bodyParser.urlencoded({ extended:  false  }));  
app.use(bodyParser.json());  
  


// app.post('/',function (req,res) {  
//     console.log(req.body)
//     res.end(' ' + req.body.id);  
// });  
const listSample = [
    {id : 1 ,title : '누가 내 초코를 옮겼을까?' , description : '치즈를 옮겨야지.', preview : '그리고 그리고 그리고.', pic : 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk'},
    {id : 2 ,title : '난쟁이가 쏘아올린 대포알' , description : '대포알?.' , preview : '그란데 말입니다..' , pic : 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk'}
]

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');

const viewList = function(req, res){
    res.render('jade_templet', {_title1:listSample[0].title, _description1:listSample[0].description ,_title2:listSample[1].title, _description2:listSample[1].description});
}

const onClickAdd = function(req, res){



}

app.get('/list',viewList);
app.get('/add',onClickAdd);



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

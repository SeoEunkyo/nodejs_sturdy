const express = require("express");  
const bodyParser = require("body-parser");  
const app = express();  
  
app.use(bodyParser.urlencoded({ extended:  false  }));  
app.use(bodyParser.json());  
  


app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');

const index = function(req, res){
    res.render('jade_templet');
}

const listData = function(req, res){
    res.json({listData : 'Data from server ..'}).end();
}

app.get('/',index);
app.get('/list',listData);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
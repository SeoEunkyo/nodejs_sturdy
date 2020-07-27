const express = require("express");  
const bodyParser = require("body-parser");  
const app = express();  
  
app.use(bodyParser.urlencoded({ extended:  false  }));  
app.use(bodyParser.json());  
  


app.post('/',function (req,res) {  
    console.log(req.body)
    res.end(' ' + req.body.id);  
});  

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
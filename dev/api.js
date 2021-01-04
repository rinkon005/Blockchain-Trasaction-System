const express = require('express')
const app = express();


app.get('/blockchain', function (req, res) {



});


app.post('/transaction',function(req,res){
    res.send("It works");


});
app.get('/mine',function(req,res){


});


app.listen(3003,function()
{
    console.log("listing to 3005");
}
);

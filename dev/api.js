const express = require('express')
const app = express();


app.get('/blockchain', function (req, res) {
    



});


app.post('/transaction',function(req,res){
    console.log(req.body);
    res.send(`The amount of money is ${req.body.amount} bitcoin.`);
    

});
app.get('/mine',function(req,res){


});


app.listen(4004,function()
{
    console.log("listing to 3005");
}
);

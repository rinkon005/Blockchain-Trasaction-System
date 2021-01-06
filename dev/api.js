const express = require('express');
const app = express();
const bodyParser= require('body-parser');
//const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');

const nodeAddress = uuidv4().split('-').join('');
const Blockchain= require('./blockchain')
const bitcoin=new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/blockchain', function (req, res) {
    res.send(bitcoin);

});



app.post('/transaction',function(req,res){
    const blockIndex= bitcoin.createNewTransaction(req.body.amount,req.body.sender,req.body.recipient);
    res.json({ note: `Transaction will be added to ${blockIndex}.`});
    
    

});

app.get('/mine',function(req,res){
    const lastBlock=bitcoin.getLastBlock();
    const previousBlockHash=lastBlock['hash'];
    const currentBlockData={
        transaction:bitcoin.pendingTransactions,
        index:lastBlock['index']+1

    };
    const nounce=bitcoin.proofOfWork(previousBlockHash,currentBlockData);

    const blockHash=bitcoin.hashBlock(previousBlockHash,currentBlockData,nounce);
    bitcoin.createNewTransaction(12.5,"MINING_REWARD",nodeAddress);
    const newBlock= bitcoin.createNewBlock(nounce,previousBlockHash,blockHash);
    res.json({
        note:"New block created succesfully",
        block: newBlock

    });


});


app.listen(4000,function()
{
    console.log("listing to 4000....");
}
);


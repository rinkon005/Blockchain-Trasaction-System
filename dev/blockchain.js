
const sha256=require('sha256');
function Blockchain()
{
    this.chain=[]
    this.pendingTransactions=[] 
}
Blockchain.prototype.createNewBlock=function(nonce,previousBlockHash,hash) 
{
    const newBloclk = {
        index:this.chain.length+1,
        timestamp:Date.now(),
        transactions:this.pendingTransactions,
        nonce: nonce,      
        hash:hash,
        previousBlockHash:previousBlockHash,

    };
    this.pendingTransactions=[];

    this.chain.push(newBloclk);
    return newBloclk;
  

}

Blockchain.prototype.getLastBlock=function()
{
    return this.chain[this.chain.length-1];

}
Blockchain.prototype.createNewTransaction= function(amount,sender,reciepient)
{
    const newTransaction={
        amount:amount,
        sender:sender,
        reciepient:reciepient

    };
    this.pendingTransactions.push(newTransaction);
    return this.getLastBlock()['index']+1;

}
Blockchain.prototype.hashBlock =function(previousBlockHash,currentBlockData,nonce)
{
    const dataAsString=previousBlockHash+nonce.toString()+JSON.stringify(currentBlockData);
    const hash= sha256(dataAsString);
    return hash;


}
module.exports= Blockchain;

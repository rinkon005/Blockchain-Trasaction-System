function Blockchain()
{
    this.chain=[]
    this.newTransactions=[] 
}
Blockchain.prototype.createNewBlock=function(nonce,previousBlockHash,hash) 
{
    const newBloclk = {
        index:this.chain.length+1,
        timestamp:Date.now(),
        transaction:this.newTransactions,
        nonce: nonce,      
        hash:hash,
        previousBlockHash:previousBlockHash,

    };
    this.newTransactions=[];
    this.chain.push(newBloclk);
    return newBloclk;
  
    


}
module.exports= Blockchain;

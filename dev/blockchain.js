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
        //nonce is a proff of work
        //nonce can be any number       
        hash:hash,
        previousBlockHash:previousBlockHash,

    };
    this.newTransactions=[];
    this.chain.push(newBloclk);
    return newBloclk;
    


}
const Blockchain=require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash='8044VHVWBETHKHNV4534';
const currentBlockData= [
    {
        amount:120,
        sender:'85UYV85IHYVI53THV8',
        recipient:'8OYR489YCB84Y55C'
    },
    {
        amount:20,
        sender :'5485UYV85IHYVI53THV8',
        recipient:'5TT8OYR489YCB84Y55C'
    },
    {
        amount:120,
        sender:'5585UYV85IHVI53THV8',
        recipient:'5TF8YR48YCB84Y55C'
    }

];
console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData));


var printHello = require('./printHello')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('몇 번 출력할까요? ', function(answer){
    printHello(answer)
    rl.close();
});


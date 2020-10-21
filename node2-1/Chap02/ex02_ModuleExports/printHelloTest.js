var printHello = require('./printHello')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('몇 번 반복 출력할까요? ', (answer) => {
    printHello(answer)
rl.close();
});

//printHello(10)



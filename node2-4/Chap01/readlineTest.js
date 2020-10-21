const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js? ', function(answer){
    console.log(`Thank you for your valuable feedback: ${answer}`);
    //rl.close();
});
  
// on으로 시작하는 메소드는 이벤트 처리 메소드
rl.on('line', function(input){
    console.log(`Received: ${input}`);
});



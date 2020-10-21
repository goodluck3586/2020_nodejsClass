const fs = require('fs')

//#region 1. write stream
// 1-1. 파일 쓰기
const ws = fs.createWriteStream('./readme.txt')
ws.write('스트림은 Node.js에서\n')
ws.write('스트리밍 데이터를 작업하기 위한\n')
ws.write('추상 인터페이스이다. \n')
//ws.end('마지막 스트림')

ws.on('finish', ()=>console.log('파일 스트림 finish 이벤트 발생함.'))


//#endregion






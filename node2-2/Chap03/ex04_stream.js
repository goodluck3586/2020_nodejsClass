const fs = require('fs')

//#region 1. write stream
// // // 1-1. 파일 쓰기
// const ws = fs.createWriteStream('./readme.txt');
// // ws.write('스트림은 Node.js에서\n')
// // ws.write('스트리밍 데이터로 작업하기위한\n');
// // ws.write('추상 인터페이스이다.\n');
// // //ws.end('마지막 라인');

// // ws.on('finish', ()=>console.log('finish 이벤트 발생'));

// // 1-2. 터미널에서 입력받은 텍스트 파일에 쓰기
// process.stdin.on('readable', ()=>{
//     console.log('데이터 발생');
//     let data;

//     while((data = process.stdin.read()) !== null){
//         ws.write(data);

//         if(data.toString() === 'exit\r\n'){
//             console.log('입력 상태 종료')
//             ws.end('end() 함수 실행')
//             break;
//         }
//     }
// })
//#endregion

//#region 2. read stream
//const rs = fs.createReadStream('./readme.txt', {highWaterMark: 8})
// const data = [];

// // 청크(버퍼)가 도착할 때마다 data 이벤트가 발생
// rs.on('data', (chunk)=>{
//     data.push(chunk);
//     console.log('chunk', chunk, chunk.length)
// })

// rs.on('end', ()=>{
//     console.log(Buffer.concat(data).toString())
// })

// 3. pipe
const rs = fs.createReadStream('./readme.txt');
const ws = fs.createWriteStream('./readme2.txt');

rs.pipe(ws);

const z = require('zlib').createGzip();  // 파일 압축 스트림
const w = fs.createWriteStream('file.txt.gz');
rs.pipe(z).pipe(w);




//#endregion




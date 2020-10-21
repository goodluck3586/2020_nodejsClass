var fs = require('fs');

var path1 = './readme.txt';
// // 1. 동기식 파일 읽기
// try{
//     var data = fs.readFileSync('./readme.txt');
//     console.log('동기식 파일 읽기\n', data.toString());
// }catch(error){
//     console.log('fs.readFileSync() 에러 발생');
// }

// // 2. 비동기식 파일 읽기
// fs.readFile('./readme.txt', function(err, data){
//     if(err){
//         console.log('fs.readFile() 에러 발생');
//     }else{
//         console.log('비동기식 파일 읽기\n', data.toString());
//     }
// })

// // 3. 비동기식 파일 쓰기
// fs.writeFile(path1, '안녕하세요 오늘은 금요일 야호!!', function(err){
//     if(err){
//         console.log(err);
//         return;
//     }
//     fs.readFile(path1, 'utf8', (err, data)=>console.log(data));
// })

// // 4. 파일에 내용 추가하기
// fs.appendFile(path1, '\nGSM', (err)=>{
//     if(err){
//         console.log('fs.appendFile()에서 에러')
//     }else{
//         fs.readFile(path1, 'utf8', (err, data)=>console.log(data));
//     }
// });

// // 5. 파일 존재 여부 체크 -> 읽고 쓰기
// // Check if the file exists in the current directory.
// var file = './readme.txt';
// fs.access(file, fs.constants.F_OK, (err) => {
//     console.log(`${file} ${err ? 'does not exist' : 'exists'}`);
//   });

//   // Check if the file is readable.
// fs.access(file, fs.constants.R_OK, (err) => {
//     console.log(`${file} ${err ? 'is not readable' : 'is readable'}`);
//   });

//   // Check if the file is writable.
// fs.access(file, fs.constants.W_OK, (err) => {
//     console.log(`${file} ${err ? 'is not writable' : 'is writable'}`);
//   });

// // Check if the file exists in the current directory, and if it is writable.
// fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
//     if (err) {
//       console.error(
//         `${file} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
//     } else {
//       console.log(`${file} exists, and it is writable`);
//     }
//   });

// // 6. 디렉토리 생성하기
// fs.mkdir('./testDir', (err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('디렉토리 생성 성공');
// });

// 7. 디렉토리의 파일 내용 읽기
fs.readdir('./',(err, files)=>console.log(files));


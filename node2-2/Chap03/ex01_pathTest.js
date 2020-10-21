var path = require('path')
const { PassThrough } = require('stream')

// 경로관련 전역 변수
console.log(__dirname)   // 디렉토리 경로
console.log(__filename)  // 파일의 경로


// path 모듈 함수
console.log(path.dirname(__filename))   // 디렉토리 경로
console.log(path.basename(__filename))  // 파일 이름
console.log(path.extname(__filename))   // 확장자
console.log(path.parse(__filename))     // 경로를 분석한 내용 객체로 반환

var newPath = path.format({
    root: 'C:\\',
    dir: 'C:\\Repository\\node2-2\\Chap03',
    base: 'pathTest.js',
    ext: '.js',
    name: 'pathTest'
  });
console.log(`newPath: ${newPath}`);

// path.join() 인자들을 좋바하여 새로운 경로 string 생성
var createPath = path.join(
    __dirname, 
    path.sep, 
    '..', 
    'Chap02', 
    path.sep, 
    'index.html');
console.log(`createPath: ${createPath}`);






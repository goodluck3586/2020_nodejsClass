var path = require('path')

// 경로관련 전역 변수
console.log(__dirname)  // 현재 디렉토리 경로
console.log(__filename) // 현재 파일 경로

// path 메소드
console.log(path.dirname(__filename))   // 디렉토리 경로
console.log(path.extname(__filename))   // 확장자
console.log(path.basename(__filename))  // 파일 이름
console.log(path.parse(__filename))     // 경로 파싱 => 객체 생성

// path.format() : 객체 => 경로 string으로 변환
var newPath = path.format({
    root: 'C:\\',
    dir: 'C:\\Repository\\node2-4\\Chap03',
    base: 'ex01_path.js',
    ext: '.js',
    name: 'ex01_path'
  })
  console.log('newPath: ', newPath)

  // path.join() => 인자들을 조합해서 새로운 경로 스트링 반환
  var joinPath = path.join(__dirname, path.sep,
    '..', 'Chap02', path.sep, 'index.html')

console.log('joinPath', joinPath)

var fs = require('fs')

// 1. 동기식 파일 읽기
console.log('before')
try {
    var data = fs.readFileSync('./readme.txt', 'utf-8')
    console.log(data)
} catch (error) {
    console.log('fs.readFileSync() 에러 발생.')
}
console.log('after')

// 2. 비동기식 파일 읽기
console.log('before')
fs.readFile('./readme2.txt', (err, data)=>{
    if(err){
        console.log('fs.readFile() 에러 발생.')
        return
    }
    console.log(data.toString('utf8'))
})
console.log('after')

// 3. 파일 쓰기
fs.writeFile('./readme.txt', '안녕하세요.', function(err){
    if(err) return
    fs.readFile('./readme.txt', 'utf-8', (err, data)=>{
        console.log(data)
    })
})

// 4. 파일에 내용 추가하기
fs.appendFile('./readme.txt', '반갑습니다.', ()=>console.log('내용 추가 완료'))

// 5. 파일 존재 여부 체크하기
fs.access('./readme2.txt', (err)=>{
    if(err){
        console.log('존재하지 않는 파일 입니다.')
        return
    }
    fs.readFile('./readme.txt', 'utf-8', (err, data)=>{
        console.log(data)
    })
})

// 6. 디렉토리 내용 가져오기
fs.readdir('./', (err, files)=>{
    if(err) return;
    console.log(files)
})


// // 1. 동기식 add() 함수
// function addSync(a, b){
//     return a+b;
// }
// // // var addSync2 = function(a, b){
// // //     return a+b;
// // // }
// // // console.log(addSync(3, 4))
// // // console.log(addSync2(3, 4))

// console.log('before')
// sum = addSync(5, 10)
// console.log(sum)
// console.log('after')

// // 2. 비동기식 add() 함수
// function addAsync(a, b, callbackFunc){
//     setTimeout(() => {
//         callbackFunc(a+b);
//     }, 1000);
// }

// console.log('before')
// addAsync(5, 10, function(result){
//     console.log(result)
// })
// console.log('after')

// 3. 파일 처리
// 3-1. 동기식 파일 처리
var fs = require('fs')

console.log('before')
try {
    var data = fs.readFileSync('./readme2.txt', 'utf-8')
    console.log(data)
} catch (error) {
    console.log('readFileSync 에러 발생')
}
console.log('after')

// 3-2. 비동기식 파일 처리
console.log('before')
fs.readFile('./readme3.txt', 'utf-8', function(err, data){
    if(err){
        console.log('readFile() 에러 발생')
        return;
    }
    console.log(data)
})
console.log('after')





// 1. 동기식 add() 함수
function addSync(a, b){
    return a+b;
}
// addSync = function(a, b){
//     return a+b
// }

console.log('before')
console.log(addSync(3, 4))
console.log('after')

// 2. 비동기식 add() 함수
function addAsync(a, b, callback){
    setTimeout(function(){
        callback(a+b)
    }, 2000)
}

console.log('before')
console.log(addAsync(3, 4, function(sum){
    console.log(sum);
}))
console.log('after')








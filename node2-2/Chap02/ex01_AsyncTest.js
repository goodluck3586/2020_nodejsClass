// 1. 동기식 add() 함수
function add(a, b){
    return a+b;
}

console.log('before')
var result = add(3, 4)
console.log('after')
console.log(result)

// 2. 비동기식 add() 함수
function addAsync(a, b, callback){
    setTimeout(function(){
        callback(a+b)
    }, 1000)
}

console.log('before')
addAsync(3, 4, function(result){
    console.log(result)
})
console.log('after')
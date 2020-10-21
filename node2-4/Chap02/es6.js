// // 1. 변수 var(함수 범위)
// for(var i=0; i<3; i++){
//     console.log(i)
// }
// console.log(`i=${i}`)

// b = 5;
// var b = 6;
// var b = 7;
// console.log(b)

// // const, let({}블록 범위)
// for(let j=0; j<3; j++){
//     console.log(j)
// }
// console.log(`j=${j}`)  // ReferenceError: j is not defined

// const c
// c=2  //에러
// const d = 10 // const는 상수로 재할당 불가

// const obj = {a:1, b:2, c:3}  // javascript object (json)
// console.log(obj)

// obj.a = 100
// console.log(obj)
// // obj = {}  // 에러 발생

// list = [1,2,3]
// console.log(list)

// list[0] = 100
// console.log(list)

// // 2. 템플릿 문자열
// a = 1
// b = 2
// sum = a + b
// console.log(a+' + '+b+' = '+sum);
// console.log(`${a} + ${b} = ${sum}`);

// 3. 화살표 함수(람다식)
function add1(a, b){
    return a+b;
}

add2 = function(a, b){
    console.log('add2() 함수');
    return a+b;
}

// 화살표 함수
const add3 = (a, b) => a + b  // 중괄호 생략은 return문이라는 의미

const add4 = (a, b) => {
    console.log('add4() 함수');
    return a+b;
}

// 4. 비구조화 할당
const o = {
    status: {name: 'node', value: 'js'},
    objFunc: ()=>console.log('node.js')
}

const status = o.status
const objFunc = o.objFunc

// es6 비구조화 할당
const {status, objFunc} = o





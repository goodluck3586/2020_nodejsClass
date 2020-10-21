//#region 1. 변수

// 1-1. var 변수(함수 스코프)
for(var i=0; i<3; i++){
    console.log(i)
}
console.log('i=',i)

b = 5;
var b = 6;
console.log(b)

// 1-2. const, let 변수(블록 스코프)
//const c;  // 에러 초기화 필수
const c = 3;
// c = 4;  // 에러 const로 선언한 변수는 상수

const d = {a:1, b:2, c:3}
// d = {}  // d에 저장된 객체 주소를 변경할 수 없어 Error
console.log(d)
d.a = 10
d.b = 20
console.log(d)

const e = [1,2,3,4,5]
// e = [6,7,8]  // 에러
e[0] = 10;
console.log(e)

for(let j=0; j<3; j++){
    console.log(j)
}
// console.log('j=',j)  //  j is not defined
//#endregion

//#region 2. 템플릿 문장열(백틱)
a=1
b=2
sum=a+b
console.log(a+'+'+b+'='+sum)
console.log(`${a}+${b}=${sum}`)
//#endregion

//#region 3. 객체 리터럴
// 3-1. 이전 객체 리터럴
var sayNode = function(){
    console.log('Node')
}
var oldObject = {
    sayNode: sayNode,
    sayJs: function(){
        console.log('JS');
    }
}
oldObject.es6 = 'ES6';

// 3-2. es6 객체 리터럴
const newObject = {
    sayNode,
    sayJs(){
        console.log('JS');
    }
}
console.log(oldObject)
console.log(newObject)
//#endregion

//#region 4. 화살표 함수
// 함수 선언문
function add(a, b){
    return a+b;
}

// 함수 표현식
add = function(a, b){
    return a+b;
}

// 화살표 함수
const add2 = (a, b) => a+b;  // 실행문장이 return문 하나이면 {} 생략
//#endregion

//#region 5. 비구조화 할당
const obj = {
    status: {name: 'node', value: 'js'},
    objFunc: ()=>console.log('node.js')
}

// 예전 방식
// const status = obj.status;
// const objFunc = obj.objFunc;

// es6 방식
const {status, objFunc} = obj;
console.log(status)
objFunc()

var list = ['nodejs', {}, 10, true]

// 예전 방식
// var one = list[0]
// var two = list[1]

// es6 방식
const [one, two, , three] = list;
console.log(one, two, three);

[a, b, ...rest] = [1,2,3,4,5,6,7,8,9,10]
console.log(`a=${a}, b=${b}, rest=${rest}`);
//#endregion












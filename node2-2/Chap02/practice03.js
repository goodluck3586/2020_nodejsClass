// 동기 함수 처리
var start = 1;
var sync1 = (param)=>param*2;
var sync2 = (param)=>param*3;
var sync3 = (param)=>param*4;

console.log(sync3(sync2(sync1(start))));

// 비동기 함수 처리
var async1 = (param, cb)=>cb(param*2);
var async2 = (param, cb)=>cb(param*3);
var async3 = (param, cb)=>cb(param*4);

async1(start, (result1)=>{
    console.log(`result1 = ${result1}`);
    async2(result1, (result2)=>{
        console.log(`result2 = ${result2}`);
        async3(result2, (result3)=>{
            console.log(`result3 = ${result3}`);
        })
    })
})






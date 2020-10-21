function print(name, time, obj){
    console.log('%d초 뒤에 함수 호출', time/1000);
    console.log('hello %s', name)
    console.log('JSON %j', obj)
}

// 1. setTimeout()함수
// 1-1 delayTime 초 뒤에 함수 호출
var delayTime = 1500
console.log('before')
setTimeout(function(){
    print('world', delayTime, {name: 'dongyub'})
}, delayTime)
console.log('after')
// addListener()와 on() 함수는 똑같다.
process.addListener('exit', ()=>console.log('process.addListener'));

process.on('exit', function(){
    console.log('process.on')
});

// once는 한 번만 동작함.
process.once('exit', ()=>console.log('process.once'))

// 이벤트 발생
process.emit('exit')
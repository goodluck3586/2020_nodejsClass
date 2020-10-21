// buffer 객체는 고정 길이 바이트 시퀀스를 저장하는 임시 저장공간
const buffer = Buffer.from('버퍼 시퀀스에 담긴 데이터')
console.log('buffer', buffer)
console.log('buffer.length', buffer.length)
console.log('buffer.toString()', buffer.toString('utf-8'))

// 버퍼 합치기
const array = 
[
    Buffer.from('버퍼 '),
    Buffer.from('시퀀스 '),
    Buffer.from('데이터 ')
] 

const buffer2 = Buffer.concat(array)
console.log('concat(): ', buffer2.toString())










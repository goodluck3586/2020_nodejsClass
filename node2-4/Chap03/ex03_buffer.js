const buffer = Buffer.from('버퍼 시퀀스에 담긴 데이터')
console.log('buffer', buffer)
console.log('buffer.length', buffer.length)
console.log('buffer.toString()', buffer.toString('utf-8'))

// 버퍼 합치기
const array = [Buffer.from('버퍼 '), Buffer.from('데이터 '), Buffer.from('합치기 ')]
const buffer2 = Buffer.concat(array)
console.log('concat(): ', buffer2.toString())

const crypto = require('crypto')

//#region 1. 단방향 암호화
const secret = '1111'

// 암호 알고리즘 지정 객체 생성 => 평문 암호화 => 인코딩된 암호문 출력
const encrypted_value = crypto.createHash('sha512').update(secret).digest('base64');

console.log(secret)
console.log(encrypted_value)
//#endregion
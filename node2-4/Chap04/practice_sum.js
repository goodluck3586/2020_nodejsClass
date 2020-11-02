// <연습 문제>두 값(num1, num2)을 활용하여 두 값 사이의 합계 구하기
// localhost:8080/?num1=1&num2=100 => {num1: 1, num2: 100}
var http = require('http');
var url = require('url');
var querystring = require('querystring');   // / 쿼리스트링 문자열 파싱

//#region 1. get 방식으로 넘어온 두 값(num1, num2)을 활용하여 두 값 사이의 합계 구하기
var server = http.createServer((req, res)=>{
    if(req.url === '/favicon.ico'){
        res.end();
        return;
    }
    console.log('req.url: ', req.url)   // /

    // 1. url 파싱 => json 객체 

    // 2. url.query 파싱 => json 객체 
    // /?num1=1&num2=100 => {num1: 1, num2: 100}

    // 3. num1, num2를 정수로 변환

    // 4. num1, num2가 정상적으로 존재하면 합계를 구해서 res.end()로 반환

    res.end()
}).listen(8080, ()=>console.log('8080 포트에서 대기중'))
//#endregion



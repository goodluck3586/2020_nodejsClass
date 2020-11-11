var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

//#region 1. get 방식으로 넘어온 두 값(num1, num2)을 활용하여 두 값 사이의 합계 구하기
var server = http.createServer(function(req, res){
    console.log('req.url', req.url)
    if(req.url === '/favicon.ico'){
      return
    }
  
    // <1> url을 parsing하여 객체로 저장
    const parsedURL = url.parse(req.url); // localhost:8080/?num1=1&num2=100
    console.log('parsedURL.query : ', parsedURL.query);  // num1=1&num2=100
  
    // <2> parsing된 url에서 querystring을 추출하여 객체로 저장
    const qs = querystring.parse(parsedURL.query);  // // num1=1&num2=100
    console.log('querystring : ', qs);  // { num1: '1', num2: '100' }
  
    // <3> 변수 num1, num2에 querystring의 num1, num2값을 정수로 변환하여 저장
    let num1 = parseInt(qs.num1);   // '1' or NaN
    let num2 = parseInt(qs.num2);   // '100'
    console.log(`num1 : ${num1}, num2 : ${num2}`);
  
    // <4> num1, num2에 잘못된 값이 들어있으면 400 Bad Request 에러 코드 전송
    if( num1 || num2 ){
    //   res.statusCode = 400;  // 400 Bad Request
    //   res.end('<h1>Bad Request</h1>');
        fs.readFile('./public/sumRequest.html', (err, data)=>{
            res.end(data);
        })
    }else{
      var sum = 0;
      for(var i=num1; i<=num2; i++){
        sum += i;
      }
      res.end(`<h1>${sum}</h1>`);  // <4> num1부터 num2까지의 합계를 <h1>태그로 감싸서 출력한다. 
    }
  }).listen(8080, function(){
    console.log('8080 포트에서 대기중');
  });
  //#endregion

//#region 2. post 방식으로 넘어온 두 값(num1, num2)을 활용하여 두 값 사이의 합계 구하기
// var server = http.createServer((req, res)=>{
//     if(req.method.toLowerCase() === 'post'){
//         var body='';
//         req.on('data', (chunk)=>{
//             body += chunk;
//         });

//         req.on('end', ()=>{
//             var data = querystring.parse(body); // 'num1=1&num2=100' => {'num1':1, 'num2':2}
//             var num1 = parseInt(data.num1);
//             var num2 = parseInt(data.num2);

//             res.setHeader('Content-Type', 'text/html; charset=utf-8');
//             if(Number.isNaN(num1) || Number.isNaN(num2)){
//                 res.end('잘못된 숫자가 입력되어 에러가 발생함.')
//             }else{
//                 var sum = 0;
//                 for(var i=num1; i<=num2; i++)
//                     sum += i;
//                 res.end(`${num1} ~ ${num2}의 합계: ${sum}`);
//             }
//         })
//     }else{
//         if(req.url === '/'){
//             fs.readFile('./public/sumRequest.html', (err, data)=>{
//                 res.end(data);
//                 return;
//             })
//         }
//     }
// }).listen(8080, ()=>console.log('8080 포트에서 대기중'))
//#endregion



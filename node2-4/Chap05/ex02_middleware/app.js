var express = require('express');
var app = express();                
const port = 3000

//#region 1. 정적 파일 처리 미들웨어 (express.static('public')) 
// // 정적 파일 처리 미들웨어 => 디렉토리 public 이름은 URL의 일부가 아니다.
// var logger = require('morgan');

// app.use(logger('dev'));
// app.use(express.static('public'));  

// app.get('/', (req, res)=>{
//     res.sendFile(__dirname + '/public/hello.html');
// });

// app.get('/', (req, res)=>{
//     res.send('<h1>Hello express</h1>')
// });

// app.get('/hi', (req, res) => res.send('<h1>Hi Express</h1>'))
// app.get('/iu', (req, res) => res.redirect('/iu.png'));
//#endregion

//#region 2. 미들웨어 만들기
// 미들웨어 함수는 다양한 기능을 제공하여 사용자가 선택하여 실행할 수 있다.

// var birds = require('./routes/birds')

function mw1(req, res, next){
    console.log('middle ware 1');
    req.myName = 'dongyun';
    next();
}
function mw2(req, res, next){
    console.log('middle ware 2');                                                                                                                                                                           
    next();
}

app.use(mw1);
app.use(mw2);
// app.use(mw2, mw1);

// app.use('/bird', birds);

app.get('/', function(req, res){
    console.log(`req.url: ${req.url}`);
    res.send(`<h1>${req.myName}</h1>`);
});

app.get('/hi', (req, res) => {
    console.log(`req.url: ${req.url}`);
    res.send('<h1>Hello</h1>');
});
//#endregion

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
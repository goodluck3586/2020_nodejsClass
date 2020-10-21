// node-static 확장 모듈을 이용한 정적 파일 서버 만들기 예제

var static = require('node-static');  // 모듈 불러오기

var file = new static.Server('./public');  // 정적 파일 경로가 세팅된 file 객체 생성


require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);

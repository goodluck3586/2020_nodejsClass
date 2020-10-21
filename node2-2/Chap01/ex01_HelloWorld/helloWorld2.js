var http = require('http');  // 모듈 불러오기

var server = http.createServer(function(request, response){
    response.setHeader('content-type', 'text/html')
    response.write('Hello server')
    response.end('<h1>Hello My name is dongyun</h1>')
})

server.listen(3000)`
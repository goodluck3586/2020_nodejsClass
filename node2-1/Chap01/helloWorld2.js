var http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Hello world!</h1>')
    response.write('<h1>Hello world!</h1>')
    response.end('<h1>Hello world!</h1>');
}).listen(3000);
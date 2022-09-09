const http = require('http');

// http.createServer(function (req, res){
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//     res.write('<h1>hello</h1>');
//     res.end('<h1>server end</h1>');
// }).listen(8080,()=>{
//     console.log('server start');
// })

const server = http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>hello</h1>');
    res.end('<h1>server end</h1>');
})

server.listen(8080);
server.on('listening',()=>{
    console.log('server listening on port 8080');
});
server.on('error',(error)=>{
    console.log(error);
})
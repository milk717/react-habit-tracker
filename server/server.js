const http = require('http');

const server = http.createServer(function(request, response){
    const fs = require('fs');
    let jsonData;
    fs.readFile('./json/habit.json','utf8', (err,jsonFile)=>{
        if(err) throw err;

        jsonData = JSON.parse(JSON.stringify(jsonFile));
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(jsonData);
    });
})

server.listen(8080, function(){
    console.log('Server is running on port 8080');
});
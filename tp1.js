const http = require('http');

const server = http.createServer((req,res)=>{
    res.statusCode = 400;
    res.end('Hello, world ! (status code 400)');
});

server.listen(3000,()=>console.log('Le serveur tourne sur http://localhost:3000'));
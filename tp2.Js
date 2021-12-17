const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type", "application/json");
    let data = {
        "message":"Hello word",
        "status":200,
    }
    res.end(JSON.stringify(data));
});

server.listen(3000,()=>console.log('Le serveur tourne sur http://localhost:3000'));
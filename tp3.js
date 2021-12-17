const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    let data = {
        "firstname":"Matthis",
        "lastname":"Louis-Mirtile",
        "birthdate": "24/10/1998",
        "color":"test",
    }
    res.end(JSON.stringify(data));
});

server.listen(3000,()=>console.log('Le serveur tourne sur http://localhost:3000'));
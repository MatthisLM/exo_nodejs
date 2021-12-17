const http = require('http');

const server = http.createServer((req,res)=>{
    var url = require('url');
    var url_parts = url.parse(req.url, true);
    var query = JSON.stringify(url_parts.query.query);
    res.statusCode = 200;
    res.end(`Your message:${query}`);
});

server.listen(3000,()=>console.log('Le serveur tourne sur http://localhost:3000'));
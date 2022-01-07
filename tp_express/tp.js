const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hello-world', function (req, res) {
    res.send('Hello World !!!')
})

app.get('/message', function (req, res) {
    if (req.query.message.length > 20){
        res.status(400).send('{ message: “Bad Request” }');
    } else {
        res.send(req.query.message)
    }
})

app.post('/infos/headers', function (req, res) {
    res.send(req.headers)
})

app.post('/welcome', function (req, res) {
    if(req.headers.firstname && req.headers.birthdate){
        let birthdate = new Date(req.headers.birthdate);
        birthdate.setFullYear(birthdate.getFullYear() + 18);
        let now = new Date();
        if (birthdate.getFullYear() < now.getFullYear()){
            res.send(`welcome ${req.headers.firstname}`);
        } else {
            res.send("Forbidden").status(403);
        }
    } else {
        res.send("invalid payload").status(403);
    }
})

app.get('/rick-roll', function (req, res) {
    res.redirect('https://youtu.be/dQw4w9WgXcQ');
})

app.delete('/custom-header', function (req, res) {
    res.send(req.headers);
})

app.get('/params/:id/:key/:slug', function (req, res) {
    res.json({'id':req.query.id, 'key':req.query.key, 'slug':req.query.slug});
})

app.listen(3000)
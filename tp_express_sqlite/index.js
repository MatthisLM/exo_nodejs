const express = require('express');
const bodyParser = require('body-parser');

const { User } = require('./core/sequelize.js');

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', async function(req, res){
    res.send('welcome')
})
app.post('/create', async function(req, res){
    let headerKeys = Object.keys(req.headers).sort();
    console.log(JSON.stringify(headerKeys));
    if(JSON.stringify(headerKeys).includes("username") && JSON.stringify(headerKeys).includes("email")){
        const user = await User.create({
            "lastname":req.headers.lastname,
            "firstname":req.headers.firstname,
            "email":req.headers.email,
            "username":req.headers.username,
            "github":req.headers.github
        });
        res.json(user);
    } else {
        res.status(403).send('Invalid payload');
    }
})

app.patch('/user/:userId/update', async function(req, res){
    let foundedUser = await User.findOne({ where: { "id":req.params.userId }})
    if (foundedUser){
        console.log(req.headers)
        /*await User.udpdate({},{
            where: {
                
            }
        });*/
        res.json(foundedUser);
        //res.status(200).send('user updated succesfully.');
    }else{
        res.status(404).send('User do not exist.')
    }
})

app.delete('/user/:userId/delete', async function(req, res){
    await User.destroy({
        where: {
            id: req.params.userId
        }
    })
    res.send('user deleted succesfully.').status(200);
})

app.get('/user/:userId', async function(req, res){
    let foundedUser = await User.findOne({ where: { "id":req.params.userId }})
    if (foundedUser){
        res.status(200).json(foundedUser);
    }else{
        res.status(404).send('User do not exist.');
    }
})

app.get('/users', async function(req, res){
    let userList = await User.findAll();
    res.status(200).json(userList);
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
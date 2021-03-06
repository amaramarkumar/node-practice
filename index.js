const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');

const PORT = process.env.PORT || 5000;
//const REDIS_PORT = process.env.REDIS_PORT || 6379;

//const client = redis.createClient(REDIS_PORT);

const app = express();



function getRepos(req, res){
    const { username } = req.params;
    res.send(`<h2> Welcome ${username} !!!</h2>`); 
}

app.get('/repos/:username',  getRepos);

app.listen(5000,()=>{
    console.log(`App Listening on port ${PORT}`);
});
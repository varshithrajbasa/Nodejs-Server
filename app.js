const express = require("express");
const app = express();
const port = 8080;
const fs = require('fs');


app.get('/',(req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<h1>App is working</h1>");
    res.end();
});

app.get('/users',(req,response)=>{
    fs.readFile('users/users.json','utf8', (err, data) => {
        if(err){
            response.writeHead(500, { 'Content-Type': 'application/json' });
            response.end();
            throw err;
        }
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(data);
        response.end();
     });
});

app.get('/users/:id',(req,response)=>{
    let id = req.params.id;
    let user = {};
    fs.readFile('users/users.json','utf8', (data, err) => {
        if(err){
            response.writeHead(500, { 'Content-Type': 'application/json' });
            response.end();
            throw err;
        }
        response.writeHead(200, { 'Content-Type': 'application/json' });
        if(data.users)
        user = data.users.filter(d=>{
            if(d.id === id)
            return d;
        });
        console.log(user)
        response.write(user);
        response.end();
     })
});

app.post('/users',(req,response)=>{
    let usersData = {};
    fs.readFile('users/users.json','utf8', (err, data) => {
        if(err){
            response.writeHead(500, { 'Content-Type': 'application/json' });
            response.end();
            throw err;
        }
        response.writeHead(200, { 'Content-Type': 'application/json' });
        if(data.users)
        user = data.users.filter(d=>{
            if(d.id == id) return  d;
        });
        response.write(JSON.stringify(user));
        response.end();
     })
});

app.post('/users/:id',(req,response)=>{
    let id = req.params.id;
    let user = {};
    fs.readFile('users/users.json','utf8', (err, data) => {
        if(err){
            response.writeHead(500, { 'Content-Type': 'application/json' });
            response.end();
            throw err;
        }
        response.writeHead(200, { 'Content-Type': 'application/json' });
        if(data.users)
        user = data.users.filter(d=>{
            if(d.id == id) return  d;
        });
        response.write(JSON.stringify(user));
        response.end();
     })
});

app.get('/test/:id',(req,res)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>test</h1>`);
    console.log(req.params.id)
    res.end();
});

app.listen(port,()=>{console.log(`App is running on port: ${port}`);});

  

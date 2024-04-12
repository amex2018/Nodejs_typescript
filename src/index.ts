import express = require('express');
import { Request, Response } from 'express';
import bodyParser = require('body-parser');
import mysql = require('mysql');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('details/:id', (req: Request, res: Response) =>{
    var pool = mysql.createPool({
        host: 'localhost:3306',
        user: 'root',
        password: 'password',
        database: 'DB',
        connectionLimit: 10,
        multipleStatements: true
    })
    res.send({
        message: "Message from server",
        id: req.params.id,
        name: req.params.name
    })
});


app.post('/add/Id/:id', (req: Request, res: Response) => {
   res.send({
    data: req.body,
    params:{
        id: req.params.id,
    }
   })
})

app.listen('3040', ()=>{
    console.log('The application is listening on port 3040');
})

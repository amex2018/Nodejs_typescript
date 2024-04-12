"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/Id:id/Name:name', (req, res) => {
    res.send({
        message: "Message from server",
        id: req.params.id,
        name: req.params.name
    });
});
app.post('/add', (req, res) => {
    res.send({
        data: req.body
    });
});
app.listen('3040', () => {
    console.log('The application is listening on port 3040');
});

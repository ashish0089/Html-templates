const express = require("express");

const app = express();
const hbs = require('hbs');
const port = process.env.PORT||3000;


app.set('view engine', 'hbs')

app.get('/',(req,res) =>{
    res.render('index');
})

app.listen(port, () =>{
    console.log("running on the port "+port)
})
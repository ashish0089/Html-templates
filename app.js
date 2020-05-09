const express = require("express");
const path = require('path')
const app = express();
const hbs = require('hbs');
const port = process.env.PORT||3000;
const publicDirectoryPath = path.join(__dirname, './public')

app.set('view engine', 'hbs')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/',(req,res) =>{
    res.render('index');
})

app.listen(port, () =>{
    console.log("running on the port "+port)
})
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var produtoController = require('./api/controllers/produtoController');
var loginController = require('./api/controllers/loginController');
var bodyparser = require('body-parser');
var path = require('path'); 

mongoose.connect('mongodb://localhost:27017/estoque');

app.use(bodyparser.json());
app.use('/login', loginController);

app.get('*', function(req, res){
    res.sendfile(index.html);

})

app.listen(3015, function(){

    console.log('Servidor em pé');
})
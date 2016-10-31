var express = require('express');
var app = express();
var mongoose = require('mongoose');
var produtoController = require('./api/controllers/produtoController');
var loginController = require('./api/controllers/loginController');
var localController = require('./api/controllers/localController');
var bodyparser = require('body-parser');
var path = require('path'); 
//var produto = require('./api/models/produto');

//app.use(express.static(path.join(__dirname, '/models')));
mongoose.connect('mongodb://localhost:27017/estoque');

//  produto.find({},function(err, val){
//        if(err){
//            res.send('Err:' + err);
//            console.log('dd'+err);
//        }
    
// console.log(val);
//    });

app.use(bodyparser.json());
app.use('/login', loginController);
app.use('/produto', produtoController);
app.use('/local', localController);

app.get('*', function(req, res){
    res.sendfile(index.html);

})

app.listen(3015, function(){

    console.log('Servidor em pé');
})
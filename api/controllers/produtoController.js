var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var produto = require('../models/produto');

router.get('/',function (req,res){
    res.setHeader('Content-Type', 'application/json');
    // produto.find({},{ id:0, __v:0},function(err,val){
    //     if(err)
    //     {
    //         res.send('Erro:'+err);
    //         console.log('erro');
    //     }
    //     else
    //     {      
    //         res.send(val);    
    //         console.log('funcionou');
    //     }
    //     console.log(val);
    // });
    // console.log('entrou no create');
   // res.send('teste');
   findProduto(req,res);

});

function findProduto(req, res){

    produto.find({},{ id:0, __v:0},function(err,val){
        if(err)
        {
            res.send('Erro:'+err);
            console.log('erro');
        }
        else
        {      
            res.send(val);    
            console.log('funcionou');
        }
        console.log(val);
    });
}

router.post('/criar', function(req, res){
    produto.create({ id:1, nome :req.body.nome}, function(err, val){
        if(err)
        {
            res.send('Erro:'+err);
            console.log('erro');
        }
        else
        {           
            console.log('funcionou');
           // findProduto(req,res);
        }
        console.log(val);
    })
     console.log('inseriu');
});

router.post('/update', function(req, res){    
    produto.findOneAndUpdate({nome :'Cortador2'},{nome :'cortador3'}, function(err, val){
     
        if(err)
        {
            res.send('Erro:'+err);
            console.log('erro');
        }
        else
        {           
            console.log('funcionou');
        }
        console.log(val);
       
    });
    produto.save();
     console.log('alterou');
     
});

module.exports = router;
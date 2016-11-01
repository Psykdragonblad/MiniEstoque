var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var produto = new require('../models/produto');
//var produto = new requi

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
    produto.findOneAndUpdate({nome :'35'},{nome :'36'}, 
    //{ $inc: {  __v: 1 }}, 
    function(err, val){
     
        if(err)
        {
            res.send('Erro:'+err);
            console.log('erro');
        }
        else
        {           
          //  p_produto.save();
            console.log('funcionou');
           // var p_produto = new 
            //  produto.save(function(er){
            //     console.log(er);
            // })
        }
        //console.log(val);
       
    });
    //produto.save();
     console.log('alterou');
     
});

module.exports = router;
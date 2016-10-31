var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var local = require('../models/local');

router.get('/', function(req,res){
    local.find({},function(err, valor){
        if(err){
            res.send(err);
        }
        else{
            res.send(valor);
        }

    });

});

router.post('/inserir', function(req, res){
    local.create({nome:req.body.rua, rua: req.body.pratileira, andar: req.body.andar, descricao: req.body.descricao}, function (er, valor){
        if(er){
            res.send(er)
            console.log('erro');
        }
        else{
            res.send(valor);
            console.log(valor);
           
        }

    })

});

module.exports = router;
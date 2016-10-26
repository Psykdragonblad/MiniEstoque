var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var usuario = require('../models/usuario');

router.post('/logar', function(req, res){
//res.setHeader('Content-Type', 'application/json');
   usuario.findOne({login:req.body.login},function(err, val){
       if(err){
           res.send('Err:' + err);
       }
        if(val == null){
            res.send('Login ou Senha invalida!');
            console.log('1');
        }
        else{
            res.send(val);
            console.log('Autenticado com Sucesso!');
        }
   });

});

module.exports = router;
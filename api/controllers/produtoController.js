var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var produto = require('../models/produto');

router.get('/',function (req,res){
    console.log('entrou no create');
    res.send('teste');

});

module.exports = router;
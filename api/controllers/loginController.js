var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();


router.post('/logar', function(req, res){
   console.log(req.body.login);
});

module.exports = router;
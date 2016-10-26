var mongoose = require('mongoose');

var EstoqueSchema = new mongoose.Schema({
    _id: String,
    login: String,
    senha: String
},{collection:'usuario'});

module.exports = mongoose.model('usuario', EstoqueSchema);
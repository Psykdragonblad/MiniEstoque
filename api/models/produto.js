var mongoose = require('mongoose');

var EstoqueSchema = new mongoose.Schema({
    _id: String,
    nome: String

},{collection:'produto'});

module.exports = mongoose.model('produto', EstoqueSchema);
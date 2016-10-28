var mongoose = require('mongoose');

var EstoqueSchema = new mongoose.Schema({
    id: String,
    nome: String,
    descricao: String

},{collection:'local'});

module.exports = mongoose.model('local', EstoqueSchema);
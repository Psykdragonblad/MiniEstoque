var mongoose = require('mongoose');

var EstoqueSchema = new mongoose.Schema({
    id: String,
    rua: String,
    pratileira: String,
    andar: String,
    descricao: String,
     __v: { type: Number, select: false}

},{collection:'local'});

module.exports = mongoose.model('local', EstoqueSchema);
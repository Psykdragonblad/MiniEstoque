var mongoose = require('mongoose');

var EstoqueSchema = new mongoose.Schema({
    _id: String,
    login: String,
    senha: String,
    __v: { type: Number, select: false}
},{collection:'usuario'});

module.exports = mongoose.model('usuario', EstoqueSchema);
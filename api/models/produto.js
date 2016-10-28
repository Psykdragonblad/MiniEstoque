var mongoose = require('mongoose');

var EstoqueSchema = new mongoose.Schema({
    id: String,
    nome: String

},{collection:'produto'},{
    versionKey: true // You should be aware of the outcome after set to false
});
// EstoqueSchema.pre('findOneAndUpdate', function (next) 
// { 
//     console.log(next);
//    // this.increment();
//    //next.increment();
//      next(); })

module.exports = mongoose.model('produto', EstoqueSchema);

// var mongoose = require('mongoose');

// var ProdutoSchema = new mongoose.Schema({
//  //id: Number,
//  nome: String,
//  //descricao: String,
//  //dt_validade : Date,
//  //lote: String
// },{collection:'produto'});

// module.exports = mongoose.model('produto', ProdutoSchema);
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
//var produto = mongoose.model('produto', EstoqueSchema);
//var p_produto = new produto({});

//produto.pre('save', function)
// p_produto.save(function (error, data) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.dir(data);
//     }
// });
//p_produto.save();

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
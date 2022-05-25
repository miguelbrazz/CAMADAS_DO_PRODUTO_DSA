const produtoRepositorio = require('../persistencia/produto_persistencia.js')

function inserir (produto, callback) {
    if(!produto || !produto.nome || !produto.preco){
        const erro = "Campo nome ou preço vazios!";
        callback(erro, undefined)
    }
    else {
        produtoRepositorio.inserir(produto, callback);
    }  
}
module.exports = {
    inserir
}
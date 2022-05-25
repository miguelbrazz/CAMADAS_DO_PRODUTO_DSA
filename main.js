const cadastroProdutos = require('./negocio/produto_negocio.js')

//Main
// cadastroProdutos.inserir({nome: "bolo", preco:5},
//     function(err, produtoInserido) {
//         console.log("INSERINDO novo item...")
//         if(err) {
//             console.log("Sistema está com problemas!");
//             console.log(err);
//         }
//         else {
//             console.log("Produto inserido: ");
//             console.log(produtoInserido);
//         }
//     });

cadastroProdutos.inserir({}, 
    function(err, produtoInserido) {
        console.log("Status: Produto sem campos");
        if(err) {
            console.log("Sistema está com problemas!");
            console.log(err);
        }
        else {
            console.log("Produto inserido: ");
            console.log(produtoInserido);
        }
    }
);

cadastroProdutos.inserir({nome: "Prod1"}, 
    function(err, produtoInserido) {
        console.log("Status: Produto sem preço");
        if(err) {
            console.log("Sistema está com problemas!");
            console.log(err);
        }
        else {
            console.log("Produto inserido: ");
            console.log(produtoInserido);
        }
    }
);

cadastroProdutos.inserir({nome: "cachorro quente", preco: 12}, 
    function(err, produtoInserido) {
        console.log("Status Sucesso!");
        if(err) {
            console.log("Sistema esta com problemas!");
            console.log(err);
        }
        else {
            console.log("Produto inserido: ");
            console.log(produtoInserido);
        }
    }
);

// cadastroProdutos.listar(
//     function(err, produtos) {
//         console.log("Listar: ");
//         if(err) {
//             console.log("Sistema está com problemas!");
//             console.log(err);
//         }
//         else {
//             console.log(produtos);
//         }
//     }
// );

// cadastroProdutos.buscarPorId(2, 
//     function(erro, produto) {
//         console.log("BuscarPorId(2): ");
//         if(erro) {
//             console.log("Erro: "+erro);
//         }
//         else {
//             console.log(produto);
//         }

// });

// cadastroProdutos.buscarPorId(4, 
//     function(erro, produto) {
//         console.log("BuscarPorId(4): ");
//         if(erro) {
//             console.log("Erro: "+erro);
//         }
//         else {
//             console.log(produto);
//         }
// });

// cadastroProdutos.deletar(6, function(erro, produto) {
//     console.log("Produto Deletado(6): ");
//     if(erro) {
//         console.log("Erro: "+erro);
//     }
//     else {
//         console.log(produto);
//     }
// });

// cadastroProdutos.atualizar(1, {nome: "Torrada", preco: 10.5},
//     function(erro, produto) {
//         console.log("Atualizar Produto(1): ");
//         if(erro) {
//             console.log("Erro: "+erro);
//         }
//         else {
//             console.log(produto);
//         }
// });





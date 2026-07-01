const produto = {
    nome: "Monitor",
    categoria: "Informática",
    preco: "899.90",
    estoque: 5
};


produto.preco = Number(produto.preco);


if (isNaN(produto.preco)) {
    console.log("Preço inválido.");
} else {

    function exibirProduto(produto) {
        console.log(`Produto: ${produto.nome}`);
        console.log(`Categoria: ${produto.categoria}`);
        console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
    }

    exibirProduto(produto);

    if (produto.estoque < 10) {
        console.log("\nEstoque baixo");
    } else {
        console.log("\nEstoque adequado");
    }

    console.log("\nPropriedades:");
    console.log(Object.keys(produto));

    console.log("\nValores:");
    console.log(Object.values(produto));

    console.log("\nTipos:");
    for (let chave in produto) {
        console.log(`${chave}: ${typeof produto[chave]}`);
    }
}

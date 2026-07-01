const autores =
"Machado de Assis,Clarice Lispector,Monteiro Lobato";


const listaAutores = autores.split(",");


listaAutores.forEach(autor => console.log(autor));


const pesquisa = "Clarice Lispector";

if (listaAutores.includes(pesquisa)) {
    console.log("\nAutor encontrado");
} else {
    console.log("\nAutor não encontrado");
}


function cadastrarLivro(titulo, autor) {
    return `Livro "${titulo}" escrito por ${autor}.`;
}

console.log(cadastrarLivro("Dom Casmurro", "Machado de Assis"));


console.log("\nLista:");
console.log(listaAutores.join(", "));

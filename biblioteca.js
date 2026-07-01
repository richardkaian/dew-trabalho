const autores =
"Machado de Assis,Clarice Lispector,Monteiro Lobato";

// Transformar em array
const listaAutores = autores.split(",");

// Exibir autores
listaAutores.forEach(autor => console.log(autor));

// Verificar autor
const pesquisa = "Clarice Lispector";

if (listaAutores.includes(pesquisa)) {
    console.log("\nAutor encontrado");
} else {
    console.log("\nAutor não encontrado");
}

// Função
function cadastrarLivro(titulo, autor) {
    return `Livro "${titulo}" escrito por ${autor}.`;
}

console.log(cadastrarLivro("Dom Casmurro", "Machado de Assis"));

// Join
console.log("\nLista:");
console.log(listaAutores.join(", "));
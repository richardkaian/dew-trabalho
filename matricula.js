let disciplinas = [
    "HTML",
    "CSS",
    "JavaScript"
];


disciplinas.forEach(disciplina => console.log(disciplina));

console.log(`\nTotal: ${disciplinas.length}`);


if (disciplinas.includes("JavaScript")) {
    console.log("\nAluno cursa JavaScript");
} else {
    console.log("\nAluno não cursa JavaScript");
}


disciplinas.push("Engenharia de Software");

console.log("\nPercorrendo disciplinas:");

for (let i = 0; i < disciplinas.length; i++) {

    if (disciplinas[i] === "") {
        continue;
    }

    console.log(disciplinas[i]);

    if (disciplinas[i] === "TCC") {
        console.log("Laço interrompido");
        break;
    }
}

const evento = {
    nome: "Semana da Tecnologia",
    local: "Auditório",
    data: new Date("2026-08-20"),
    participantes: ["Ana", "Carlos", "Marcos"]
};

function exibirEvento(evento) {

    console.log(`Evento: ${evento.nome}`);
    console.log(`Local: ${evento.local}`);

    console.log(
        evento.data.toLocaleDateString("pt-BR")
    );

    console.log(`Participantes: ${evento.participantes.length}`);

    if (evento.participantes.length === 0) {
        console.log("Nenhum participante cadastrado");
    }

    console.log(`Local cadastrado: ${evento.hasOwnProperty("local")}`);

    console.log("\nPropriedades:");

    for (let chave in evento) {
        console.log(`${chave}:`, evento[chave]);
    }

    console.log("\nTipos:");

    for (let chave in evento) {
        console.log(`${chave}: ${typeof evento[chave]}`);
    }
}

exibirEvento(evento);
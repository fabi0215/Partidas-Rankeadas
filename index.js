console.log("olá grandes Guerreiros")

// Função para calcular o saldo de Rankeadas e determinar o nível
function calcularPartidasRankeadas(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna o saldo e o nível do jogador
    return { saldoVitorias, nivel };
}

// Dados dos jogadores
const jogadores = [
    { nome: "Guerreiro Azul", derrotas: 20, vitorias: 59 },
    { nome: "Floco de Neve", derrotas: 25, vitorias: 81 },
    { nome: "Inferno Vermelho", derrotas: 15, vitorias: 35 },
    { nome: "Leon Destemido", derrotas: 30, vitorias: 49 },
    {nome: "Richard o Grande", derrotas: 30, vitorias: 98 }
];

jogadores.forEach(jogador => {
    const { saldoVitorias, nivel } = calcularPartidasRankeadas(jogador.vitorias, jogador.derrotas);
    console.log(`O Herói ${jogador.nome} tem saldo de ${saldoVitorias} está no nível de ${nivel}`);
});

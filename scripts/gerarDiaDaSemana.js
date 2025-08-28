// Função que gera o dia da semana, data e hora atuais
function gerarDiaDaSemana() {
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });
    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    })
    // Monta a frase completa
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`
    return dataCompleta
}

export default gerarDiaDaSemana;
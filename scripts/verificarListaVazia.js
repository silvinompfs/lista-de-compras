// Seleciona o texto que avisa que a lista está vazia
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeCompras) {
    // Pega todos os itens da lista
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    
    // Se não tem nenhum item, mostra a mensagem
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        // Se tem itens, esconde a mensagem
        mensagemListaVazia.style.display = "none";
    }
}

export default verificarListaVazia;
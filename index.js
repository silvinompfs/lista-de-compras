// Importa funções de outros arquivos JS
import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
// Pega a UL (lista) onde os itens serão adicionados
const listaDeCompras = document.getElementById("lista-de-compras");
// Pega o botão "Salvar item"
const botaoAdicionar = document.getElementById("adicionar-item");

// Quando clicar no botão, adiciona um novo item
botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();// Evita que a página recarregue
    const itemDaLista = criarItemDaLista();// Cria um novo item
    listaDeCompras.appendChild(itemDaLista);// Coloca o item na lista
    verificarListaVazia(listaDeCompras);// Atualiza a mensagem de lista vazia
})
// Quando a página carregar, já checa se a lista está vazia
verificarListaVazia(listaDeCompras);
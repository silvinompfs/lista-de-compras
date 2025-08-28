import gerarDiaDaSemana from "./gerarDiaDaSemana.js"
// Pega o campo de texto onde o usuário digita o item
const inputItem = document.getElementById("input-item");
// Contador para criar IDs únicos para os checkboxes
let contador = 0;

export function criarItemDaLista() {
    // Se o campo estiver vazio, mostra um alerta 
    if (inputItem.value === "") {
        alert("Por favor, insira um item!")
        return
    }

    // Cria os elementos HTML que formarão o item da lista
    const itemDaLista = document.createElement("li");// Cada item é um <li>
    const containerItemDaLista = document.createElement("div");// Div para organizar
    containerItemDaLista.classList.add("lista-item-container");// Adiciona uma classe
    // Cria uma checkbox
    const inputCheckbox = document.createElement("input")
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;// ID único
    // Nome do item
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;// Coloca o texto digitado

    // Se clicar na checkbox, risca o item
    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    })

    // Junta os elementos
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);

    // Adiciona a data e hora
    const dataCompleta = gerarDiaDaSemana();
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista; // Retorna o item completo
}


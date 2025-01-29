
let listaAmigos = [];
let listaSorteados = [];
let sorteado;

// Função para adicionar um amigo na lista é verificar nome valido
function adicionarAmigo(){   
    let input = document.getElementById("amigo"); // Pega o item com o Id amigo(o input)
    let nomeAmigo = input.value.trim(); // Remove os espaços em branco

    // Verifica se o nome não está vazio
    if (nomeAmigo !== "") {
        listaAmigos.push(nomeAmigo);      
        listarAmigos(); // Lista na pagina os amigos que ja foram cadastrados na lista
        limparCampo(); // Limpa o input com nome, para receber outtro nome
        limparResultado(); // Limpa a mensagem do sorteado anterior que foi removido da lista
    }else{
        alert('Por favor, insira um nome válido.');  
    }
}

// Função para imprimir a lista de amigos cadastrados na página 
function listarAmigos(){
    let campo = document.getElementById("listaAmigos");
    campo.innerHTML = "";  // limpar a lista de amigos

    // Vê o tamanho da lista e percorrer todos os elementos e coloca cada um dentro de uma li e põe na tela
    let i = 0;
    while (i < listaAmigos.length) {
        let item = document.createElement("li");
        item.textContent = listaAmigos[i];
        campo.appendChild(item);
        i++;
    }
}

// Função para limpar o campo input para adicionar outro nome
function limparCampo(){
    campo = document.getElementById("amigo");
    campo.value = '';    
}

// Função para sortear um amigo
function sortearAmigo(){
    
    // Limpa o nome do sorteado anteriormente
    limparResultado();
    
    // Tratar lista de amigos caso estiver vazia.
    if (listaAmigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione nomes antes de sortear.");
        return;
    }
    
    // Gerar sorteado aleatório usando as bibliotecas Math e Random, para gerar um indice
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let sorteado = listaAmigos[indiceSorteado];

    // Adiciona o sorteado à lista de sorteados
    listaSorteados.push(sorteado);

    // Remove o nome sorteado da lista
    listaAmigos.splice(indiceSorteado, 1);

    exibirSorteado(sorteado);
}
// Função para limpar a lista de nomes adicionados nas li
function limparLista(){
    let lista = document.getElementById("listaAmigos");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}
// Função para remover a mensagem do sorteado
function limparResultado() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 
}

// Função para exibir o sorteado em uma li
function exibirSorteado(sorteado) {
    limparLista();
    limparResultado() // Limpa o resultado anterior
    let item = document.createElement("li");
    item.textContent = `O amigo sorteado é: ${sorteado}`;
    resultado.appendChild(item);
}

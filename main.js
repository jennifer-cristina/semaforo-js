'use strict'

// Criação das variáveis 
const sinalVermelho = document.getElementById('Vermelho')
const sinalAmarelo = document.getElementById('Amarelo')
const sinalVerde = document.getElementById('Verde')
const automatico = document.getElementById('automatico')
let idAutomatico = null;
let semaforoDesligado = null;

// Função para acender o sinal Vermelho
const ligarVermelho = () => {
    semaforo.src = './img/vermelho.png'
}

// Função para acender o sinal Amarelo
const ligarAmarelo = () => {
    semaforo.src = './img/amarelo.png'
}

// Função para acender o sinal Verde
const ligarVerde = () => {
    semaforo.src = './img/verde.png'
}

// validação se ela estiver no vermelho
const Vermelho = () => {
    return semaforo.src.includes('vermelho')
}

// validação se ela estiver amarelo
const Amarelo = () => {
    return semaforo.src.includes('amarelo')
}

// validação se ela estiver verde
const Verde = () => {
    return semaforo.src.includes('verde')
}


// semaforo no automatico
const trocarSinal = () => {

    if (Vermelho() || semaforoDesligado == null) {
        semaforoDesligado = 1;
        ligarAmarelo()
    } else if (Amarelo()) {
        ligarVerde()
    } else if (Verde()) {
        ligarVermelho()
    }
}



// Função para colocar no automatico o semaforo
const ligarAutomatico = () => {
    if (idAutomatico == null) {
        idAutomatico = setInterval(trocarSinal, 500)
        automatico.textContent = 'Parar'
    } else {
        clearInterval(idAutomatico)
        automatico.textContent = 'Automático'
        idAutomatico = null
    }

}

//Eventos para chamar o click dos botões
sinalVermelho.addEventListener('click', ligarVermelho)
sinalAmarelo.addEventListener('click', ligarAmarelo)
sinalVerde.addEventListener('click', ligarVerde)
automatico.addEventListener('click', ligarAutomatico)
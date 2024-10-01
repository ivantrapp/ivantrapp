function cartasJaForamGeradas(cartaGerada) {
    return todasCartasGeradas.indexOf(cartaGerada) >= 0;
    //return todasCartasGeradas.includes(cartaGerada);
}

function gerarCartaJogador() {
    //gerar uma carta que não seja repetida;
    let novaCarta = Math.floor(Math.random() * (40)) + 1;

    while (cartasJaForamGeradas(novaCarta)) { // Enquanto o numero já existir, escolher outro
        novaCarta = Math.floor(Math.random() * (40)) + 1;
    }
    todasCartasGeradas.push(novaCarta);
    return novaCarta;
}

function geradorTodasCartas() {
    totalJogadas = 0;
    todasCartasGeradas = [];
    cartasGeradasJogador1 = [];
    cartasGeradasJogador2 = [];
    cartasGeradasJogador3 = [];
    cartasGeradasJogador4 = [];
    manilha = gerarCartaJogador();
    // manilha = 3; está com erro preciso verificar
    //3 cartas para cada jogadores
    for (let i = 0; i < 3; i++) {
        cartasGeradasJogador1.push(gerarCartaJogador());
        cartasGeradasJogador2.push(gerarCartaJogador());
        cartasGeradasJogador3.push(gerarCartaJogador());
        cartasGeradasJogador4.push(gerarCartaJogador());
    }
}
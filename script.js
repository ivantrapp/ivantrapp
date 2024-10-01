let vezDaJogada = 1;
var jogador;
var cartaClicada;
var totalJogadas = 0;
var mesa = document.getElementById("mesa");
var cartasPaus = [1, 10];
var cartasCopas = [11, 20];
var cartasEspada = [21, 30];
var cartasOuro = [31, 40];
var manilha = 0;
var cartasGeradasJogador1 = [];
var cartasGeradasJogador2 = [];
var cartasGeradasJogador3 = [];
var cartasGeradasJogador4 = [];
var todasCartasGeradas = [];
var cartasJodador1 = [1, 2, 3];
var cartasJodador2 = [7, 8, 9];
var cartasJodador3 = [10, 11, 12];
var cartasJodador4 = [4, 5, 6];
var totalDaRodada = 0;
var totalPontosRodadaDeles = 0;
var totalMeusPontos = 0;
var totalPontosDeles = 0;
var totalPontosMinhaRodada = 0;
var totalPontosRodadaDeles = 0;
var totalPontosMeusJogos = 0;
var totalPontosJogosDeles = 0;
var cartasJogadasNaMesaJogador2e4 = [];
var cartasJogadasNaMesaJogador1e3 = [];
var controle = 1;



document.addEventListener('click', function (e) {
      if ( e.composedPath()[1].attributes.id != undefined && e.composedPath()[2].attributes.id != undefined) {
        cartaClicada = e.composedPath()[1].attributes.id.value;
        jogador = e.composedPath()[2].attributes.id.value;

        if (jogador.substring(7) == '3' && jogador.substring(7) == vezDaJogada) {
            colocaCartaJogadorNaMesa(jogador, cartaClicada);
            removerCartaJogada(cartaClicada);
            totalJogadas++;

            setTimeout(function () {
                JogadaDoJogador4();
            }, 1000);
            setTimeout(function () {
                fimRodada();
            }, 1600);

        }
    }
});

function fimRodada() {
    setTimeout(function () {
        totalDaRodada++;
        contabilizaPontos();
        preparaNovaRodada();
    }, 2000);

    setTimeout(function () {
        JogadaDoJogador1();
    }, 3000);

    setTimeout(function () {
        JogadaDoJogador2();
    }, 4000);
}

function contabilizaPontos() {
    //obtendo qual foi as cartas jogadas na mesa
    var vencedorRodada = verificandoMaiorCarta();
    console.log("Vencedor da rodada é: " + vencedorRodada);

    if (vencedorRodada == "jogador1e3") {
        adicionarPontoMinhaRodada();
    } else if (vencedorRodada == "empate") {
        alert("Rodada Empatada!! Niguém Pontua");
    } else {
        adicionarPontoRodadaDeles();
    }

    cartasJogadasNaMesaJogador1e3 = [];
    cartasJogadasNaMesaJogador2e4 = [];

    if (totalDaRodada == 3) {
        if (totalPontosMinhaRodada > totalPontosRodadaDeles) {
            //verificar se houve truco;
            adicionarPontoAosMeusPontos();
        } else {
            adicionarPontoAosPontosDeles();
        }
        limparPontosRodadaDeles();
        limparPontosMinhaRodada();
        totalDaRodada = 0;
        controle = 1;
    } else {
        controle++;
    }
    if (totalMeusPontos == 12 || totalPontosDeles == 12) {
        if (totalMeusPontos == 12) {
            alert("Você ganhou o jogo!!");
            adicionarMeuPontoDeJogo();
        }
        if ((totalPontosDeles == 12)) {
            alert("Eles ganharam o jogo!!");
            adicionarPontoDeJogoDeles();
        }
        limparPontosDeles();
        limparMeusPontos();
    }
}

function verificandoMaiorCarta() {

    //Adicionando valores iguais para as cartas desconsiderando o naipe = Acopas vai ter o mesmo valor que Aouro
    var obtendoIndiceCartasJogadores1e3 = obtendoValorPeloIndiceDasCartas(cartasJogadasNaMesaJogador1e3);
    var obtendoIndiceCartasJogadores2e4 = obtendoValorPeloIndiceDasCartas(cartasJogadasNaMesaJogador2e4);
    var indiceManilha = obtendoValorPeloIndiceDasCartas([manilha]);
    var meuTimeTemManilha = temManilha(obtendoIndiceCartasJogadores1e3, indiceManilha[0]);
    var timeAdversarioTemManilha = temManilha(obtendoIndiceCartasJogadores2e4, indiceManilha[0]);

    console.log("Cartas dos Jogadores 1 e 3:  " + obtendoCartasPeloIndiceDasCartas(cartasJogadasNaMesaJogador1e3));
    console.log("Cartas dos Jogadores 2 e 4:  " + obtendoCartasPeloIndiceDasCartas(cartasJogadasNaMesaJogador2e4));
    console.log("Indice da manilha" + obtendoCartasPeloIndiceDasCartas([manilha])[0]);
    console.log("Temos manilha: " + meuTimeTemManilha + "      eles tem mailha: " + timeAdversarioTemManilha);



    if (meuTimeTemManilha || timeAdversarioTemManilha) {

        if (meuTimeTemManilha && timeAdversarioTemManilha) {
            //significa que precisamos verificar o naipe para definir a maior carta
            alert("Os dois times tem manilha");
            return "empate"; //isso por enquanto
        }
        if (meuTimeTemManilha) {
            return "jogador1e3";
        } else {
            return "jogador2e4"
        }

        //verificar se os dois times tem manilha, caso seja sim, verificar qual é a maior
        //se só um time tiver manilha essa já é a maior carta da partida

    } else {
        //como nenhum time tem manilha preciso pegar a maior carta de cada um
        //somado mais um porque o indice começa em 0

        var maiorValorMeuTime = Math.max(...obtendoIndiceCartasJogadores1e3);
        var maiorValorAdversario = Math.max(...obtendoIndiceCartasJogadores2e4);

        if (maiorValorMeuTime > maiorValorAdversario) {
            return "jogador1e3";
        } else if (maiorValorMeuTime == maiorValorAdversario) {
            return "empate";
        } else {
            return "jogador2e4"
        }
    }


    //preciso verificar dessa lista de indices qual é o maior valor, se o maior meu igual ao maior valor do adversario
    //verificar

}

function obtendoValorPeloIndiceDasCartas(cartas) {
    let ordenandoCartasPaus = [4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
    let ordenandoCartasCopas = [14, 15, 16, 17, 18, 19, 20, 11, 12, 13];
    let ordenandoCartasEspada = [24, 25, 26, 27, 28, 29, 30, 21, 22, 23];
    let ordenandoCartasOuro = [34, 35, 36, 37, 38, 39, 40, 31, 32, 33];
    let lista = [];
    for (let i = 0; i < 2; i++) {
        var carta = cartas[i];
        var aux;
        //verificandoCartasPaus
        // ordenandoCartasPaus.indexOf(carta);  ==> seria legal ver depois porque essa linha não funcionou e a debaixo sim
        var index = ordenandoCartasPaus.findIndex(t => t == carta);
        if (index != -1) {
            aux = index;
        }
        index = ordenandoCartasCopas.findIndex(t => t == carta);
        if (index != -1) {
            aux = index
        }
        index = ordenandoCartasEspada.findIndex(t => t == carta);
        if (index != -1) {
            aux = index
        }
        index = ordenandoCartasOuro.findIndex(t => t == carta);
        if (index != -1) {
            aux = index
        }
        lista.push(aux + 1);
    }
    return lista;
}

function obtendoCartasPeloIndiceDasCartas(cartas) {
    let ordenandoCartasPaus = [4, 5, 6, 7, 8, 9, 10, 1, 2, 3];
    let ordenandoCartasCopas = [14, 15, 16, 17, 18, 19, 20, 11, 12, 13];
    let ordenandoCartasEspada = [24, 25, 26, 27, 28, 29, 30, 21, 22, 23];
    let ordenandoCartasOuro = [34, 35, 36, 37, 38, 39, 40, 31, 32, 33];
    let obtendoCarta = [4, 5, 6, 7, "Q", "J", "K", "A", 2, 3];
    let naipe = "";
    let lista = [];
    for (let i = 0; i < 2; i++) {
        var carta = cartas[i];
        var aux;
        //verificandoCartasPaus
        // ordenandoCartasPaus.indexOf(carta);  ==> seria legal ver depois porque essa linha não funcionou e a debaixo sim
        var index = ordenandoCartasPaus.findIndex(t => t == carta);
        if (index != -1) {
            aux = index;
            naipe = "Paus";
        }
        index = ordenandoCartasCopas.findIndex(t => t == carta);
        if (index != -1) {
            aux = index;
            naipe = "Copas";
        }
        index = ordenandoCartasEspada.findIndex(t => t == carta);
        if (index != -1) {
            aux = index;
            naipe = "Espada";
        }
        index = ordenandoCartasOuro.findIndex(t => t == carta);
        if (index != -1) {
            aux = index;
            naipe = "Ouro"
        }
        let novoIndice = aux;
        lista.push(obtendoCarta[novoIndice] + naipe);
    }
    return lista;
}

function temManilha(lista, indice) {
    var manilhaNova = indice;
    if (indice == 10) {
        manilhaNova = 1;
    } else {
        manilhaNova += 1;
    }
    return lista.findIndex(i => i == manilhaNova) != -1;
}

function preparaNovaRodada() {
    let quantidadeJogadores = 4;
    for (let i = 1; i <= 4; i++) {
        var mesaJogador = document.getElementById("mesa-jogador" + i);
        mesaJogador.innerHTML = "";
    }
    vezDaJogada = 1;
    //quando não estiver mais cartas gerar novas
    if (totalJogadas == 12) {
        geradorTodasCartas();
        desenhaTodasCartas();
    }
}

function JogadaDoJogador1() {
    let carta = "";
    switch (controle) {
        case 1:
            carta = "carta1";
            break;

        case 2:
            carta = "carta2";
            break;

        case 3:
            carta = "carta3";
            break;

        default:
            break;
    }
    colocaCartaJogadorNaMesa("jogador1", carta);
    removerCartaJogada(carta);
    totalJogadas++;
    vezDaJogada++;
}

function JogadaDoJogador2() {
    let carta = "";
    switch (controle) {
        case 1:
            carta = "carta7";
            break;

        case 2:
            carta = "carta8";
            break;

        case 3:
            carta = "carta9";
            break;

        default:
            break;
    }
    colocaCartaJogadorNaMesa("jogador2", carta);
    removerCartaJogada(carta);
    totalJogadas++;
    vezDaJogada++;
}

function JogadaDoJogador4() {
    let carta = "";
    switch (controle) {
        case 1:
            carta = "carta4";
            break;

        case 2:
            carta = "carta5";
            break;

        case 3:
            carta = "carta6";
            break;

        default:
            break;
    }
    colocaCartaJogadorNaMesa("jogador4", carta);
    removerCartaJogada(carta);
    totalJogadas++;
    vezDaJogada++;
}

geradorTodasCartas();
desenhaTodasCartas();

setTimeout(function () {
    JogadaDoJogador1();
}, 2000);

setTimeout(function () {
    JogadaDoJogador2();
}, 2000);

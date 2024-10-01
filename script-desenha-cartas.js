var caminhoPastaImagens = "./cartas-vermelhas/";
var imagemSemFundo = "carta-fundo"

function criarImgNoHtml(nomeImagem, textoAlternativo) {
    let img = document.createElement("img");
    img.src = caminhoPastaImagens + nomeImagem + ".png";
    img.alt = textoAlternativo;
    return img;
}

function desenhaTodasCartas() {
    for (let i = 0; i < 3; i++) {

        //Meu Time
        let desenhaJogador1 = document.getElementById("carta" + cartasJodador1[i]);
        desenhaJogador1.innerHTML = "";
        desenhaJogador1.style.visibility = "visible";
        desenhaJogador1.appendChild(criarImgNoHtml(imagemSemFundo, "cartas do Parceiro" + i));

        let desenhaJogador3 = document.getElementById("carta" + cartasJodador3[i]);
        desenhaJogador3.innerHTML = "";
        desenhaJogador3.style.visibility = "visible";
        desenhaJogador3.appendChild(criarImgNoHtml(cartasGeradasJogador3[i], "Minhas Cartas" + i));


        //Time Adversário
        let desenhaJogador2 = document.getElementById("carta" + cartasJodador2[i]);
        desenhaJogador2.innerHTML = "";
        desenhaJogador2.style.visibility = "visible";
        desenhaJogador2.appendChild(criarImgNoHtml(imagemSemFundo, "Cartas do Jogador 2: " + i));

        let desenhaJogador4 = document.getElementById("carta" + cartasJodador4[i]);
        desenhaJogador4.innerHTML = "";
        desenhaJogador4.style.visibility = "visible";
        desenhaJogador4.appendChild(criarImgNoHtml(imagemSemFundo, "Cartas do Jogador 4: " + i));
    }
    //Manilha
    desenharCartaManilha();
}

function desenharCartaManilha() {
    let manilhaHtml = document.getElementById("manilha");
    manilhaHtml.innerHTML = "";
    manilhaHtml.appendChild(criarImgNoHtml(manilha, "Manilha do Jogo"));
}

function removerCartaJogada(idCarta) {
    debugger
    let cartaJogada = document.getElementById(idCarta);
    // cartaJogada.innerHTML = "";
    cartaJogada.style.visibility = 'hidden';
}

function colocaCartaJogadorNaMesa(jogador, classCarta) {
    let numCarta = classCarta.replace("carta", "");
    let obtemCartaJogador = '';
    let mesaJogada = document.getElementById("mesa-" + jogador);
    let numJogador = jogador.replace("jogador", "");
    if (numJogador == '1') {
        switch (numCarta) {
            case '1':
                obtemCartaJogador = cartasGeradasJogador1[0];
                break;
            case '2':
                obtemCartaJogador = cartasGeradasJogador1[1];
                break;
            case '3':
                obtemCartaJogador = cartasGeradasJogador1[2];
                break;

            default:
                break;
        }
    }
    if (numJogador == '4') {
        switch (numCarta) {
            case '4':
                obtemCartaJogador = cartasGeradasJogador4[0];
                break;
            case '5':
                obtemCartaJogador = cartasGeradasJogador4[1];
                break;
            case '6':
                obtemCartaJogador = cartasGeradasJogador4[2];
                break;

            default:
                break;
        }
    }
    if (numJogador == '2') {
        switch (numCarta) {
            case '7':
                obtemCartaJogador = cartasGeradasJogador2[0];
                break;
            case '8':
                obtemCartaJogador = cartasGeradasJogador2[1];
                break;
            case '9':
                obtemCartaJogador = cartasGeradasJogador3[2];
                break;

            default:
                break;
        }
    }
    if (numJogador == '3') {
        switch (numCarta) {
            case '10':
                obtemCartaJogador = cartasGeradasJogador3[0];
                break;
            case '11':
                obtemCartaJogador = cartasGeradasJogador3[1];
                break;
            case '12':
                obtemCartaJogador = cartasGeradasJogador3[2];
                break;

            default:
                break;
        }
    }

    mesaJogada.appendChild(criarImgNoHtml(obtemCartaJogador, "Carta na mesa do " + jogador));

    if (jogador == "jogador1" || jogador == "jogador3") {
        cartasJogadasNaMesaJogador1e3.push(obtemCartaJogador);
    } else {
        cartasJogadasNaMesaJogador2e4.push(obtemCartaJogador);
    }
}
function adicionarPontoAosMeusPontos() {
    totalMeusPontos++;
    modificaPontuacaoHtml("minhaPontuacao", totalMeusPontos);
}

function adicionarPontoAosPontosDeles() {
    totalPontosDeles++;
    modificaPontuacaoHtml("pontuacaoDeles", totalPontosDeles);
}

function adicionarMeuPontoDeJogo() {
    totalPontosMeusJogos++;
    modificaPontuacaoHtml("meuJogo", totalPontosMeusJogos);
}

function limparPontosDeles() {
    totalPontosDeles = 0;
    modificaPontuacaoHtml("pontuacaoDeles", totalPontosDeles);
}

function limparMeusPontos() {
    totalMeusPontos = 0;
    modificaPontuacaoHtml("minhaPontuacao", totalMeusPontos);
}

function adicionarPontoDeJogoDeles() {
    totalPontosJogosDeles++;
    modificaPontuacaoHtml("jogoDeles", totalPontosJogosDeles);
}

function adicionarPontoMinhaRodada() {
    totalPontosMinhaRodada++;
    modificaPontuacaoHtml("minhaRodada", totalPontosMinhaRodada);
}

function adicionarPontoRodadaDeles() {
    totalPontosRodadaDeles++;
    modificaPontuacaoHtml("rodadaDeles", totalPontosRodadaDeles);

}

function limparPontosRodadaDeles() {
    totalPontosRodadaDeles = 0;
    modificaPontuacaoHtml("rodadaDeles", totalPontosRodadaDeles);
}

function limparPontosMinhaRodada() {
    totalPontosMinhaRodada = 0;
    modificaPontuacaoHtml("minhaRodada", totalPontosMinhaRodada);
}

function modificaPontuacaoHtml(elementId, valor) {
    let objHtml = document.getElementById(elementId);
    objHtml.innerHTML = valor;
}
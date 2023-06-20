var render = document.getElementById("render")
var render2 = document.getElementById("render2")
var setaDireita = document.getElementById("seta-direita")
var setaEsquerda = document.getElementById("seta-esquerda")

function trocarImagem() {
    render.style ="display: none;"
    render2.style = "display: flex; margin-left: 80px"
}

function voltarImagem() {
    render.style ="display: flex;"
    render2.style = "display: none;"
}
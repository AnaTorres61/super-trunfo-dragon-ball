var carta1A = {
  nome:"Son-Goku",
  imagem:"https://cdnb.artstation.com/p/assets/images/images/019/993/047/large/eduardo-medeiros-prancheta-1.jpg",
  atributos:{
    KI: 8700,
    Técnicas: 8500,
    Velocidade: 85,
    Transformações: 7
}
}
var carta1B = {
  nome:"Vegeta",
  imagem:"https://cdna.artstation.com/p/assets/images/images/019/993/052/large/eduardo-medeiros-prancheta-3.jpg",
  atributos:{
    KI: 8500,
    Técnicas: 8200,
    Velocidade: 85,
    Transformações: 5
}
}
var carta1C = {
  nome:"Broly",
  imagem:"https://cdnb.artstation.com/p/assets/images/images/019/993/055/large/eduardo-medeiros-prancheta-4.jpg",
  atributos:{
    KI: 9000,
    Técnicas: 7500,
    Velocidade: 78,
    Transformações: 5
}
}
var carta1D = {
  nome:"Gohan",
  imagem:"https://cdna.artstation.com/p/assets/images/images/019/993/056/large/eduardo-medeiros-prancheta-5.jpg",
  atributos:{
    KI: 7800,
    Técnicas: 7100,
    Velocidade: 80,
    Transformações: 3
}
}
var carta1E = {
  nome:"Mirai Trunks",
  imagem:"https://cdnb.artstation.com/p/assets/images/images/019/993/057/large/eduardo-medeiros-prancheta-6.jpg",
  atributos:{
    KI: 8100,
    Técnicas: 8300,
    Velocidade: 77,
    Transformações: 3
}
}
var carta1F = {
  nome:"Piccolo",
  imagem:"https://cdna.artstation.com/p/assets/images/images/019/993/046/large/eduardo-medeiros-prancheta-7.jpg",
  atributos:{
    KI: 7000,
    Técnicas: 7200,
    Velocidade: 65,
    Transformações: 1
}
}
var carta2A = {
  nome:"Freeza",
  imagem:"https://cdna.artstation.com/p/assets/images/images/019/993/080/large/eduardo-medeiros-prancheta-9.jpg",
  atributos:{
    KI: 8200,
    Técnicas: 8300,
    Velocidade: 77,
    Transformações: 5
}
}
var carta2B = {
  nome:"Majin Boo",
  imagem:"https://cdnb.artstation.com/p/assets/images/images/019/993/081/large/eduardo-medeiros-prancheta-10.jpg",
  atributos:{
    KI: 8300,
    Técnicas: 9000,
    Velocidade: 72,
    Transformações: 6
}
}
var carta2C = {
  nome:"Cell",
  imagem:"https://cdna.artstation.com/p/assets/images/images/019/993/082/large/eduardo-medeiros-prancheta-11.jpg",
  atributos:{
    KI: 7400,
    Técnicas: 6000,
    Velocidade: 66,
    Transformações: 3
}
}
var carta2D = {
  nome:"Goku Black",
  imagem:"https://cdnb.artstation.com/p/assets/images/images/019/993/083/large/eduardo-medeiros-prancheta-12.jpg",
  atributos:{
    KI: 9000,
    Técnicas: 8600,
    Velocidade: 81,
    Transformações: 3
}
}
var carta2E = {
  nome:"Zamasu",
  imagem:"https://cdna.artstation.com/p/assets/images/images/019/993/084/large/eduardo-medeiros-prancheta-13.jpg",
  atributos:{
    KI: 9400,
    Técnicas: 8600,
    Velocidade: 84,
    Transformações: 1
}
}
var carta2F = {
  nome:"Hit",
  imagem:"https://cdnb.artstation.com/p/assets/images/images/019/993/079/large/eduardo-medeiros-prancheta-14.jpg",
  atributos:{
    KI: 8200,
    Técnicas: 8800,
    Velocidade: 95,
    Transformações: 0
}
}
var carta3A = {
  nome:"Gogeta",
  imagem:"https://cdnb.artstation.com/p/assets/images/images/019/993/095/small/eduardo-medeiros-prancheta-16.jpg",
  atributos:{
    KI: 9500,
    Técnicas: 9600,
    Velocidade: 88,
    Transformações: 4
}
}
var carta3B = {
  nome:"Vegetto",
  imagem:"https://cdna.artstation.com/p/assets/images/images/019/993/098/small/eduardo-medeiros-prancheta-17.jpg",
  atributos:{
    KI: 9200,
    Técnicas: 9500,
    Velocidade: 90,
    Transformações: 4
}
}
var carta3C = {
  nome:"Gotenks",
  imagem:"https://cdna.artstation.com/p/assets/images/images/019/993/100/small/eduardo-medeiros-prancheta-18.jpg",
  atributos:{
    KI: 8000,
    Técnicas: 8500,
    Velocidade: 72,
    Transformações: 2
}
}
var carta3D = {
  nome:"Mestre Kame",
  imagem:"https://cdna.artstation.com/p/assets/images/images/019/993/102/small/eduardo-medeiros-prancheta-19.jpg",
  atributos:{
    KI: 4000,
    Técnicas: 9100,
    Velocidade: 58,
    Transformações: 1
}
}
var carta3E = {
  nome:"Kuririn",
  imagem:"https://cdna.artstation.com/p/assets/images/images/019/993/104/small/eduardo-medeiros-prancheta-20.jpg",
  atributos:{
    KI: 5500,
    Técnicas: 6000,
    Velocidade: 68,
    Transformações: 0
}
}
var carta3F = {
  nome:"Shenlong",
  imagem:"https://cdnb.artstation.com/p/assets/images/images/019/993/093/large/eduardo-medeiros-prancheta-21.jpg"
}

var cartas = [carta1A, carta1B, carta1C, carta1D, carta1E, carta1F, carta2A, carta2B, carta2C, carta2D, carta2E, carta2F, carta3A, carta3B, carta3C, carta3D, carta3E, carta3F]
var superTrunfo = cartas[17]

var pontosJogador = 0
var pontosMaquina = 0

var imagemCartaJogador = document.getElementById("cartaJogador")
imagemCartaJogador.src = "https://cdnb.artstation.com/p/assets/images/images/019/993/153/large/eduardo-medeiros-verso-card.jpg"

var imagemCartaMaquina = document.getElementById("cartaMaquina")
imagemCartaMaquina.src = "https://cdnb.artstation.com/p/assets/images/images/019/993/153/large/eduardo-medeiros-verso-card.jpg"

var imagemVersos = document.getElementById("versos")
imagemVersos.src = "https://imagensemoldes.com.br/wp-content/uploads/2021/02/Clip-Art-Letra-X-PNG.png"

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaPlacar(){
  var divPlacar = document.getElementById("placar")
  var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  divPlacar.innerHTML = html
}

function atualizaQuantidadeDeCartas(){
  var divQuantidadeCartas = document.getElementById("quantidade-cartas")
  var html = "Quantidade de cartas no jogo: " + cartas.length
  divQuantidadeCartas.innerHTML = html
}

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random()*cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)
  
  var numeroCartaJogador = parseInt(Math.random()*cartas.length)
  cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)
  
  document.getElementById('btnSortear').disabled = true
  
  imagemCartaJogador.src = cartaJogador.imagem
  
  if (cartaJogador.nome == superTrunfo.nome){
    imagemCartaMaquina.src = cartaMaquina.imagem
    var status = document.getElementById("status")
    status.innerText = "Você Venceu!!!"
    pontosJogador++
    atualizaPlacar()
    document.getElementById('btnProximaRodada').disabled = false
  }else if(cartaMaquina.nome == superTrunfo.nome){
    imagemCartaMaquina.src = cartaMaquina.imagem
    var status = document.getElementById("status")
    status.innerText = "Você Perdeu!!!"
    pontosMaquina++
    atualizaPlacar()
    document.getElementById('btnProximaRodada').disabled = false
  }else{
    exibirAtributos()
    document.getElementById('btnJogar').disabled = false
  }
  
  function exibirAtributos(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "' checked>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
  }
}

function jogar(){
  imagemCartaMaquina.src = cartaMaquina.imagem
  var status = document.getElementById("status")
  var atributoSelecionado = obterAtributoSelecionado()
  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    status.innerText = "Você Venceu!!!"
    pontosJogador++
  }
  else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    status.innerText = "Você Perdeu!!!"
    pontosMaquina++
  }
  else{status.innerText = "Empate!!!"}
  
  if(cartas.length == 0){
    opcoes.innerHTML = ""
    alert("Fim de Jogo")
    if(pontosJogador > pontosMaquina){
      status.innerText = "Você Venceu!!!"
    }else if(pontosJogador < pontosMaquina){
      status.innerText = "Você Perdeu!!!"
    }else{status.innerText = "Empate!!!"}
  }else{
    document.getElementById("btnProximaRodada").disabled = false
  }
  
  atualizaQuantidadeDeCartas()
  atualizaPlacar()
  document.getElementById('btnJogar').disabled = true
}

function obterAtributoSelecionado(){
  var radioAtributo = document.getElementsByName('atributo')
  for(var i = 0; i < radioAtributo.length; i++){
    if(radioAtributo[i].checked){
      return radioAtributo[i].value
    }
  }
}

function proximaRodada(){
  document.getElementById("btnProximaRodada").disabled = true
  document.getElementById('btnSortear').disabled = false
  document.getElementById("status").innerText = ""
  imagemCartaJogador.src = "https://cdnb.artstation.com/p/assets/images/images/019/993/153/large/eduardo-medeiros-verso-card.jpg"
  imagemCartaMaquina.src = "https://cdnb.artstation.com/p/assets/images/images/019/993/153/large/eduardo-medeiros-verso-card.jpg"
  opcoes.innerHTML = ""
}

function novoJogo(){
  document.getElementById('btnSortear').disabled = false
  document.getElementById("btnProximaRodada").disabled = true
  document.getElementById('btnJogar').disabled = true
  opcoes.innerHTML = ""
  imagemCartaJogador.src = "https://cdnb.artstation.com/p/assets/images/images/019/993/153/large/eduardo-medeiros-verso-card.jpg"
  imagemCartaMaquina.src = "https://cdnb.artstation.com/p/assets/images/images/019/993/153/large/eduardo-medeiros-verso-card.jpg"
  document.getElementById("status").innerText = ""
  cartas = [carta1A, carta1B, carta1C, carta1D, carta1E, carta1F, carta2A, carta2B, carta2C, carta2D, carta2E, carta2F, carta3A, carta3B, carta3C, carta3D, carta3E, carta3F]
  pontosJogador = 0
  pontosMaquina = 0
  atualizaPlacar()
  atualizaQuantidadeDeCartas()
}
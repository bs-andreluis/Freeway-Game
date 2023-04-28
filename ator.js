// Ator
let yAtor = 368
let xAtor = 85


let colisao = false
let comprimentoCarro = 50
let alturaCarro = 40

let pontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30)
}


function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 4
  }
  if(keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yAtor += 4
    }
  }
}

function verificaColisao(){
   //collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);
  for (let i =0; i < imagemCarros.length; i += 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 10)
    if (colisao){
      yAtor = 368
      somDaColisao.play()
      deducaoPontos();
    }
  }
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(173,255,47)
  text(pontos, width / 5, 27)
}

function marcaPontos(){
  if (yAtor < 15){
    pontos++
    yAtor = 368
    somDoPonto.play();
  }  
}

function deducaoPontos(){
  if (pontos > 0 ){
    pontos--
  }
}  

function podeSeMover(){
   return yAtor < 366

}
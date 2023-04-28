function setup() {
    createCanvas(500, 400);
   // somDaTrilha.loop()
  }
  
  function draw() {
    background(imagemEstrada);
    mostraAtor();
    movimentaAtor();
    mostraCarro();
    movimentaCarro();
    voltaSi();
    verificaColisao();
    incluiPontos();
    marcaPontos();
  }
  
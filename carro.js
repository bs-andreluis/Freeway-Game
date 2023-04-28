xCarros = [420, 420, 420, 420, 420, 420]
yCarros = [40, 100, 150, 210, 265, 320]
velocidadeCarros = [5, 4, 6, 3.5, 7, 3]
  



function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40)
  } 
}

function movimentaCarro(){
  for (let i = 0; i <imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i]  
  }
}

function voltaSi(){
  for (let i = 0; i <imagemCarros.length; i++){
   if (passouTela(xCarros[i])){
       xCarros[i]  = 500
    }
  }
}

function passouTela(xCarro){
  return xCarro < -40
}



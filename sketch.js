var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //carregar imagem para o plano de fundo do tesouro
  bg2= loadImage("aladdin_cave2.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Pontuação: " + score, 450, 50);
// adicione código para alterar o plano de fundo para o plano de fundo do tesouro

  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TESOUDO DESBLOQUEADO",250, 200);
    
  }

  console.log(score);
  drawSprites()
}
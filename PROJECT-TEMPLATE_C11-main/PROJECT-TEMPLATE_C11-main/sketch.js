//variaveis
var backgroundImage , background1 , invisibleGround;
var ship , shipmoving;

//função para o carregamento de imagens em variáveis auxiliares
function preload(){
shipmoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
backgroundImage = loadImage("sea.png");

}

function setup(){
  createCanvas(800,600);

//sprite background1 (fundo) e suas características 
background1 = createSprite(200, 180, 600, 20);
background1.addImage("ground", backgroundImage);
background1.x = background1.width / 2;
background1.velocityX = -4;

//sprite do ship e suas características 
ship = createSprite(300, 280, 20, 50);
ship.addAnimation("movement", shipmoving);
ship.scale = 0.3;

}

function draw() {
  background("blue");
 
 //recarregamento do fundo
 if (background1.x < 0) {
  background1.x = background1.width / 2;
 }

  drawSprites();

}

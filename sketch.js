var caixa;

function setup() {
  createCanvas(400, 400);
  caixa = createSprite(200,200,30,30);

}

function draw() {
  background(30);
  if(keyDown(UP_ARROW)){
    caixa.position.y = caixa.position.y -5;
    
  }
  if(keyDown(DOWN_ARROW)){
    caixa.position.y = caixa.position.y +5;
    
  }
  if(keyDown(LEFT_ARROW)){
    caixa.position.x = caixa.position.x -5;
    
  }
  if(keyDown(RIGHT_ARROW)){
    caixa.position.x = caixa.position.x +5;
    
  }
  drawSprites();
}
var wall, thickness;

var bullet, speed, weight;

var words = 0;

function setup() {
  createCanvas(1600, 400);
  speed = random(223, 321);
  weight = random(30, 52)

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  thickness = random(22, 83);

  wall = createSprite(1500, 200, thickness, height / 2);
  wall.shapeColor = color(80, 80, 80);
  //wall.visible = true;
}

function draw() {
  background(0,0,0);
  fill("white");
  textSize(20);
    //car.collide(wall);
  if (words == 1) {
      fill("red");
      textSize(20);
      text("BAD BULLET", 742.5, 100);
  } else if (words == 2) {
      fill("Yellow");
      textSize(20);
      text("OK BULLET", 747.5, 100);
  } else if (words == 3) {
    fill("Green");
    textSize(20);
    text("GOOD BULLET", 732.5, 100);
  }

  
  if (hasCollided(bullet, wall)) {

    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if(damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    }

    if (damage < 10) {
      wall.shapeColor = color(0,255, 0)
    }
  }
  //bullet.collide(wall);
  if (wall.x - bullet.x < (bullet.width + wall.width) / 2) {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;

    if (deformation > 180) {
      bullet.shapeColor = color(255, 0, 0);
      bullet.x = 800;
      bullet.y = 200;
      console.log(deformation);
      words = 1;
   }

    if (deformation < 180 && deformation > 100) {
      bullet.shapeColor = color(230, 230, 0);
      bullet.x = 800;
      bullet.y = 200;
      console.log(deformation);
      words = 2;
    }

    if (deformation < 100) {
      bullet.shapeColor = color(0, 255, 0);
      bullet.x = 800;
      bullet.y = 200;
      console.log(deformation);
      words = 3;
    }
  }
  drawSprites();
}

function hasCollided(bullet, wall) {

  bulletRightEdge = bullet.x + bullet.weight;
  wallLeftEdge = wall.x;

  if (bulletRightEdge >= wallLeftEdge) {

    return true;
  }

  return false;
}
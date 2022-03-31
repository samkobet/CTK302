let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let yoda;
let bone;
let bones = [];
let bg ;
let font1, font2; 
let lose ;
let win ;
let ssng ;

function setup() {

  createCanvas(800, 800);

  bones[0] = loadImage("assets/bone1.PNG");
  bones[1] = loadImage("assets/bone2.PNG");
  bones[2] = loadImage("assets/bone3.PNG");
  yoda = loadImage("assets/basket.PNG");

  bone = loadImage("assets/bone1.png");

    bg = loadImage('assets/bg.png');
    lose = loadImage('assets/lose.PNG');
    win = loadImage('assets/win.PNG');
    font1 = loadFont('assets/Bones.ttf');
    font2 = loadFont('assets/Scream.ttf');
    ssng = loadSound('assets/hit.wav') ;


  for (var i = 0; i < 8; i++) {
    cars.push(new Car());

  }


  frogPos = createVector(width / 2, height - 80);
  imageMode(CENTER);
}

function draw() {
  switch (state) {
    case 0:
    background('#404040');
     fill('white');
     textFont(font1);  
     textSize(100);
      text("BONECOLLECTOR", 40, 250);
    
      textFont(font2);
      textSize(20);
      text("Click to catch some bones!", 180, 400);
      break;

    case 1:
      game();
      timer++;
      if (timer > 800) {
        timer = 0;
        state = 2;
      }
      break;

    case 2:
      image(lose, width/2, height/2);

      break;

    case 3:
      image(win, width/2, height/2);

      break;

  }

}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2:
      resetTheGame();
      state = 0;
      break;

    case 3:
      resetTheGame();
      state = 0;
      break;

  }
}

function resetTheGame() {
  car = []; //clear the array
  for (var i = 0; i < 5; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.boneNum = floor(random(bones.length-1)) ;
  this.timer = 0;
  this.maxTimer = random(10, 60);

  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    //rect(this.pos.x, this.pos.y, 100, 50);
    //ellipse(this.pos.x-40, this.pos.y+30, 25, 25);
    //ellipse(this.pos.x+40, this.pos.y+30, 25, 25);
    //image(bone, this.pos.x, this.pos.y, 100, 100);
    image(bones[this.boneNum], this.pos.x, this.pos.y, 100, 100);

    this.timer = this.timer + 1;
    if (this.timer > this.maxTimer) {
      this.boneNum = this.boneNum + 1;
      if (this.boneNum > bones.length - 1) this.boneNum = 0;
      this.timer = 0 ;
    }

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function game() {
  image(bg, width/2, height/2);
  
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      
      ssng.play() ;

    }
  }

  if (cars.length == 0) {
    timer = 0
    state = 3; // they won
  }

  image(yoda, frogPos.x, frogPos.y, 100, 100);
  //ellipse(frogPos.x, frogPos.y, 60, 60) ;
  checkForKeys();

}

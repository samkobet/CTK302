let x = -300 ;
let font1;

function setup() {
  createCanvas(500, 500);
  font1 = loadFont("Doctor Glitch.otf") ;
}

function draw() {
  background("black");
  fill('white');

  //rect(x, height/2, 10, 30) ;
  textSize(20);
  textFont(font1) ;
  text("Weeeee!", x, height/2)

  x += 7;
  if (x > width) {
    x = -300;
  }
}

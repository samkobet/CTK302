let font1, font2 ;

function setup() {
  createCanvas(1000, 500);
  font1 = loadFont("assets/Doctor Glitch.otf") ;
  font2 = loadFont("assets/Break.ttf") ;
}

function draw() {
  background(200) ;

  textSize(40);
  textFont(font1) ;
  text("God gives his toughest battles", 100, 100);

textSize(50);
  textFont(font2) ;
  text("to his silliest clowns", 100, 200)

}

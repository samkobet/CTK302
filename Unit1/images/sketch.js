let amogus ;
let eggman ;
let lober ;

function setup() {
  createCanvas(500, 500);

  amogus = loadImage("assets/amogus.jpg")
  eggman = loadImage("assets/eggman.jpg")
  lober = loadImage("assets/lober.jpg")
}

function draw() {
  image(amogus, width/2, 100, 100, 100) ;
  image(eggman, width/2, 200, 100, 100) ;
  image(lober, width/2, 300, 100, 100) ;

}

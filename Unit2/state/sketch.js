let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background("#b2b2ff");

  switch (state) {

    case 0:
      background("green");
      //  text("0", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill("white");
          rect(i * 20, j * 20, 12, 12);
        }
      }
      break;

    case 1:
      background("pink");
      //  text("1", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 50, j * 400, 30, 400);
        }
      }
      break;

    case 2:
    ///  text("2", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          ellipse(i * 50, j * 50, 30, 30);
        }
      }
      break;

    case 3:
    background("#f06e66");
  //    text("3", 100, 100);
  for (let j = 0; j < 20; j++) {
    for (let i = 0; i < 20; i++) {
      rect(i * 50, j * 400, 20, 400);
      ellipse(i * 50 + 35, j * 30, 20, 20);
    }
    }
      break;

    case 4:
      //text("4", 100, 100);
      background("white");
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill("black");
          ellipse(i * 35, j * 35, 35, 35);
        }
        }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}

let state = 0;
let font1, font2;
let x = 0;
let y = -100;
let honse;
let velocity = 12;

function setup() {
  createCanvas(500, 700);
  font1 = loadFont("HotFont.ttf");
  font2 = loadFont("HotFont2.ttf");
  honse = loadImage("HONSE.png");
}

function draw() {

  background(50);

  switch (state) {
    case 0:
      fill('white');
      rect(100, 95, 290, 50);
      fill(random(255), random(255), random(255));
      textSize(30);
      textFont("sans-serif");
      text("CLICK TO START!", 120, 130);
      break;

    case 1:
      velocity = 12;
      image(honse, x, y, 100, 100);
      x = 230;
      y = y + velocity;
      if (y > 120) {
        state++;
      }
      break;

    case 2:
      velocity = 8;
      image(honse, x, y, 100, 100);
      x = x + velocity;
      y = y + velocity;
      if (x > 260) {
        state++;
      }
      break;

    case 3:
      velocity = 12;
      image(honse, x, y, 100, 100);
      x = 260;
      y = y + velocity;
      if (y > 200) {
        state++;
      }
      break;

    case 4:
      velocity = 8;
      image(honse, x, y, 100, 100);
      x = x - velocity;
      y = y + velocity / 2;
      if (x < 210) {
        state++;
      }
      break;

    case 5:
      velocity = 12;
      image(honse, x, y, 100, 100);
      x = 210
      y = y + velocity;
      if (y > 290) {
        state++;
      }
      break;

    case 6:
      velocity = 8;
      image(honse, x, y, 100, 100);
      x = x - velocity;
      y = y + velocity / 2;
      if (x < 155) {
        state++;
      }
      break;

    case 7:
      velocity = 12;
      image(honse, x, y, 100, 100);
      x = 155;
      y = y + velocity;
      if (y > 390) {
        state++;
      }
      break;

      case 8:
        velocity = 8;
        image(honse, x, y, 100, 100);
        x = x - velocity;
        y = y + velocity/3;
        if (x < 120) {
          state++;
        }
        break;

        case 9:
          velocity = 12;
          image(honse, x, y, 100, 100);
          x = 120;
          y = y + velocity;
          if (y > 470) {
            state++;
          }
          break;

          case 10:
            velocity = 8;
            image(honse, x, y, 100, 100);
            x = x + velocity;
            y = y + velocity/2;
            if (x > 160) {
              state++;
            }
            break;

            case 11:
              velocity = 12;
              image(honse, x, y, 100, 100);
              x = 160;
              y = y + velocity;
              if (y > 800) {
                state++;
                y = -100;
              }
              if (state > 11) state = 1;
              break;
  }
  fill('#fa291e');
  textSize(65);
  textFont(font2);
  text("HORSE PLINKO", 20, 80);
  fill('#fac41e');
  textSize(65);
  textFont(font1);
  text("HORSE PLINKO", 20, 80);
  fill("gray");

  ellipse(width / 2, 200, 50, 50);
  ellipse(50, 200, 50, 50);
  ellipse(150, 200, 50, 50);
  ellipse(350, 200, 50, 50);
  ellipse(450, 200, 50, 50);

  ellipse(width / 2, 550, 50, 50);
  ellipse(50, 550, 50, 50);
  ellipse(150, 550, 50, 50);
  ellipse(350, 550, 50, 50);
  ellipse(450, 550, 50, 50);

  ellipse(width / 2, 375, 50, 50);
  ellipse(50, 375, 50, 50);
  ellipse(150, 375, 50, 50);
  ellipse(350, 375, 50, 50);
  ellipse(450, 375, 50, 50);

  ellipse(100, 287.5, 50, 50);
  ellipse(200, 287.5, 50, 50);
  ellipse(300, 287.5, 50, 50);
  ellipse(400, 287.5, 50, 50);

  ellipse(100, 462.5, 50, 50);
  ellipse(200, 462.5, 50, 50);
  ellipse(300, 462.5, 50, 50);
  ellipse(400, 462.5, 50, 50);

  fill('#fa291e');
  textSize(80);
  textFont(font2);
  text("INCINERATOR", 0, 740);
  fill('#fac41e');
  textSize(80);
  textFont(font1);
  text("INCINERATOR", 0, 740);
  fill("gray");

}

function mouseReleased() {
  state = 1;
  if (state > 11) state = 1;
}

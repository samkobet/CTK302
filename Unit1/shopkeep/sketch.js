let img;
function preload() {
  img = loadImage('glasses.png');
}
function setup() {
  createCanvas(500, 500);
}

function draw() {




  if (mouseIsPressed === true) {
    background('#d0aad9');
    fill('#b299b8');
    rect(0, 30, 60, 500)
    rect(113, 425, 500, 100)
    rect(345, 30, 300, 300);
    fill('#d0aad9');
    rect(126, 458, 500, 50);
    rect( 0, 50, 30, 100)
    rect( 0, 180, 30, 100)
    rect( 0, 310, 30, 100)
    rect( 0, 440, 30, 100)
    fill('white');
    rect(360, 45, 125, 125);
    rect(360, 185, 125, 125);
    fill('gray');
    rect(414, 420, 70, 6);
    fill('#f5f2e7');
    rect(438, 375, 20, 45);
    fill('black');
    rect(446, 365, 2, 10);
     strokeWeight(0);
    fill('#feed93');
  rect(150,386, 210, 50);
  fill('black');
  rect(150,396, 210, 50);
   fill('white') ;
  triangle(125, 249, 226, 129, 125, 49);
  triangle(375, 250, 273, 129, 375, 49);
  triangle(375, 250, 273, 129, 375, 49);
  triangle(65, 217, 148, 219, 125, 257);
  triangle(129, 260, 21, 259, 141, 310);
  triangle(144, 294, 67, 328, 181, 347);
  triangle(154, 326, 125, 355, 193, 359);

  triangle(356, 223, 423, 227, 366, 257);
  triangle(366, 249, 470, 278, 364, 305);
  triangle(359, 294, 430, 321, 337, 329);
  triangle(344, 326, 375, 347, 311, 351);

  rect(229, 344, 50, 100);
  quad(80, 500, 144, 444, 365, 444, 425, 500);
  triangle(144, 444, 365, 444, 254, 415);
  ellipse(height/2, width/2, 250, 250);

  fill('#fff57c');
  triangle(135, 75, 169, 142, 135, 184);
  triangle(365, 75, 334, 142, 365, 184);
  triangle(228, 238, 214, 226, 168, 227);
  triangle(275, 238, 283, 226, 332, 227);

  fill('black');

  quad(252, 307, 226, 300, 250, 304, 277, 300);
    noFill();
strokeWeight(2);
stroke('black');
    curve(0, 0, 166, 308, 329, 305, 500, 0);
    curve(29, 124, 166, 308, 329, 305, 465, 130);
     line(184, 317, 191, 327);
  line(200, 323, 191, 327);
  line(200, 323, 209, 337);
  line(215, 326, 209, 337);
  line(215, 326, 224, 341);
  line(233, 329, 224, 341);
  line(233, 329, 237, 343);
  line(248, 329, 237, 343);
  line(248, 329, 237, 343);
  line(248, 329, 256, 343);
  line(266, 327, 256, 343);
  line(266, 327, 274, 339);
  line(280, 325, 274, 339);
  line(280, 325, 288, 333);
  line(298, 319, 288, 333);
  line(298, 319, 304, 323);
  line(314, 312, 304, 323);
  fill('black');
  ellipse(237, 132, 100, 20, 30);
  rect(206, 71, 60, 60);
  noStroke();
  fill('black');
  quad(80, 500, 144, 444, 365, 444, 425, 500);
  fill('#eeeff1')
  triangle(216, 440, 285, 442, 258, 533);
  fill('white');
  triangle(219, 438, 282, 437, 254, 471);
  fill('#feed93');
  rect(206, 112, 60, 15);
  fill('#f2e6a9');
  quad(236, 462, 248, 519, 217, 513, 200, 458);
  quad(273, 464, 265, 519, 298, 513, 308, 460);
  fill('#feed93');
  triangle(279, 412, 419, 443, 271, 481);
  triangle(230, 412, 67, 443, 239, 481);
  triangle(186, 452, 225, 474, 211, 508);
  triangle(287, 470, 318, 464, 302, 518);
 image(img, 0, 0);
  } else {
    background(230);
     strokeWeight(0);
   fill('white') ;
  triangle(125, 249, 226, 129, 125, 49);
  triangle(375, 250, 273, 129, 375, 49);
  triangle(375, 250, 273, 129, 375, 49);
  triangle(65, 217, 148, 219, 125, 257);
  triangle(129, 260, 21, 259, 141, 310);
  triangle(144, 294, 67, 328, 181, 347);
  triangle(154, 326, 125, 355, 193, 359);

  triangle(356, 223, 423, 227, 366, 257);
  triangle(366, 249, 470, 278, 364, 305);
  triangle(359, 294, 430, 321, 337, 329);
  triangle(344, 326, 375, 347, 311, 351);

  rect(229, 344, 50, 100);
  quad(80, 500, 144, 444, 365, 444, 425, 500);
  triangle(144, 444, 365, 444, 254, 415);
  ellipse(height/2, width/2, 250, 250);

  fill('#fff57c');
  triangle(135, 75, 169, 142, 135, 184);
  triangle(365, 75, 334, 142, 365, 184);
  triangle(228, 238, 214, 226, 168, 227);
  triangle(275, 238, 283, 226, 332, 227);

  fill('black');

  quad(252, 307, 226, 300, 250, 304, 277, 300);

    fill('black') ;
    textFont('Helvetica');
    textSize(12);
  text('Shopkeep keeps appearing wherever you go. You may not recognize him outside of his', 10, 20);
  text('stand, but as soon as he sets up shop...', 150, 35);

  textSize(50);
  text('Click to Enter!', 100, 470);

    noFill();
strokeWeight(2);
stroke('black');
    curve(155, 289, 200, 328, 300, 328, 324, 289);
    curve(278, 178, 216, 258, 179, 258, 171, 170);
    curve(182, 171, 285, 258, 326, 258, 333, 187);

  }

}

let shake;
function setup() {
  createCanvas(400, 350);
}

function draw() {
  shake = random(5);
  background(255);

  //face
  if (keyIsPressed) {
    fill(131, 184, 255);
  } else {
    fill(255, 218, 208);
  }
  rect(152.1 + shake, 115.37, 97.1154, 143.6951);
  fill(255); // Reset fill to white

  //tophat
  fill(71, 28, 0); // Set fill to light brown
  rect(142 + shake, 64.4, 115.0949, 24.438);

  //bottomhat
  fill(57, 20, 0); // Set fill to dark brown
  rect(135.73 + shake, 88.11, 127.6204, 28.376);
  fill(255); // Reset fill to white

  //bigearleft
  fill(255, 147, 147); // Set fill to light pink
  rect(122 + shake, 128.25, 29.7876, 47.2555);
  fill(255); // Reset fill to white

  //smallearleft
  fill(255, 98, 98); // Set fill to dark pink
  rect(131 + shake, 134.67, 20.6715, 21.8978);
  fill(255); // Reset fill to white

  //bigearright
  fill(255, 147, 147); // Set fill to light pink
  rect(250 + shake, 128.25, 29.7876, 47.2555);
  fill(255); // Reset fill to white

  //smallearright
  fill(255, 98, 98); // Set fill to dark pink
  rect(250 + shake, 134.67, 20.6715, 21.8978);
  fill(255); // Reset fill to white

  //safam
  fill(76); // Set fill to grey
  rect(172.9, 182.2, 55.0077, 31.8832);
  line(180.19, 213.45, 180.19, 183.24);
  line(188.29, 213.45, 188.29, 183.24);
  line(196.39, 213.45, 196.39, 183.24);
  line(204.5, 213.45, 204.5, 183.24);
  line(212.6, 213.45, 212.6, 183.24);
  line(220.7, 213.45, 220.7, 183.24);
  fill(255); // Reset fill to white

  //nose
  fill(156, 221, 255);
  triangle(207, 178, 217.61, 178, 212, 222);
  fill(255);
  fill(255, 147, 147);
  ellipse(200 + shake, 168.57, 44.146);
  fill(255);

  //chin
  line(199.97, 259.07, 199.97, 230.95);
  line(199.97, 230.95, 204.67, 227.27);
  line(199.97, 230.95, 195.25, 227.27);

  //eyeleft
  rect(175.19 + shake, 131.79, 25.4621, 11.0365);
  fill(0); // Set fill to black
  ellipse(187.27, 138, 5);
  fill(255); // Reset fill to white

  //eyeright
  rect(199.55 + shake, 131.79, 25.4621, 11.0365);
  fill(0); // Set fill to black
  ellipse(212.7, 138, 5);
  fill(255); // Reset fill to white

  //eybrowleft
  fill(76); // Set fill to grey
  rect(166.09, 128.35, 34.5682, 9.635);
  line(172.26, 137.3, 172.26, 128.53);
  line(180.19, 137.3, 180.19, 128.53);
  line(188.29, 137.3, 188.29, 128.53);
  fill(255); // Reset fill to white

  //eyebrowright
  fill(76); // Set fill to grey
  rect(199.55, 128.25, 34.5682, 9.635);
  line(212.6, 137.3, 212.6, 128.53);
  line(220.7, 137.3, 220.7, 128.53);
  line(228.14, 137.3, 228.14, 128.53);
  fill(255); // Reset fill to white

  //icestickes
  fill(156, 221, 255); // Set fill to light blue
  triangle(138.73, 116.49, 145.79, 116.49, 142.37, 159.86);
  triangle(166, 259, 173.15, 259, 170, 269);
  triangle(159, 259, 166, 259, 162, 279);
  triangle(228.14, 115.89, 238.16, 116, 233.31, 143.52);
  fill(255); // Reset fill to white
}
function mousePressed() {
  noLoop();
}
function mouseReleased() {
  loop();
}
function glove() {
  //glove
  fill(153, 130, 79);
  rect(161.94, 174.82, 43.8832, 74.1022);
  //thumb
  rect(205.82, 203, 11.0365, 33.0707);
  //fingers
  line(a, 212.49, 194.96, 174.82);
  line(183.88, 212.49, 183.88, 174.82);
  line(172.76, 212.49, 172.76, 174.82);
}

function keyPressed() {
  if (key == "s") {
    saveCanvas("photo", "jpg");
  }
}

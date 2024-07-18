function setup() {
  createCanvas(400, 400);
  background(29,46,24)
}

function draw() {
  
  triangle(mouseX, mouseY, 90,89,64,23)
  fill(mouseX, mouseY, 90,89,64,23)
  noStroke();
}
function setup() {
  createCanvas(800, 800);
  background(29,46,24)
}

function draw() {
  
  triangle(mouseX, mouseY, 90,89,64,23)
  fill(mouseX, mouseY, 90,89,64,23)
  noStroke();
}

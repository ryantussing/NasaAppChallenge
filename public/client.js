var cols, rows;
var scl = 20;
var w = 1400;
var h = 1000;

var flying = 0;

var terrain = [];

function setup() {
frameRate(60)
  createCanvas(600, 600, WEBGL);
  cols = w / scl;
  rows = h / scl;

}

function draw() {


  background(0);

  fill(255);
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl);
      vertex(x * scl, (y + 1) * scl);
    }
    endShape();
  }
}
var cols, rows;
var scl = 20;
var w = 800;
var h = 800;

var cam;

var terrain = [];

function setup() {
createCanvas(w, h, WEBGL);
createEasyCam();

cols = w / scl;
rows = h / scl;

for(var i=0;i<=cols;i++){
  terrain[i]=[]
  for(var y=0;y<rows;y++){
      terrain[i][y]=random(1,100)
    }
  }
}

function draw() {
background(0);

  fill(255);
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl,terrain[y][x]);
      vertex(x * scl, (y + 1) * scl,terrain[y+1][x]);
    }
    endShape();
  }
}

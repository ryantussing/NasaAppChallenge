var cols, rows;
var scl = 20;
var w;
var h;

var cam;

var terrain = [];

function setup() {
w = windowWidth*.8;
h = windowHeight*.8;
var canvas=createCanvas(w, h, WEBGL);
canvas.parent("Canvas")
createEasyCam();

cols = 50;
rows = 55;
console.log(cols+" "+rows)
for(var i=0;i<=rows;i++){
  terrain[i]=[]
  for(var y=0;y<cols;y++){
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

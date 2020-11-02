var cols, rows;
var w, h;
var camX, camY, camZ;
var scl = 20;
var xOff = 0;
var yOff = 0;
var theta = 0;

var cam;

var terrain = [];

function setup() {
  w = windowWidth*.8;
  h = windowHeight*.8;
  var canvas=createCanvas(w, h, WEBGL);
  canvas.parent("Canvas");
  cam = createCamera();
  camX = 0;
  camY = 0;
  camZ = 750;
  cam.setPosition(camX, camY, camZ);
  cam.lookAt(0, 0, 0);

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
  rotateZ(theta);
  translate(-w / 2, -h / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl,terrain[y][x]);
      vertex(x * scl, (y + 1) * scl,terrain[y+1][x]);
    }
    endShape();
  }

  translate(-w / 2, -h / 2 - 400);
  fill(255, 0, 0);
  sphere(50);

  cam.setPosition(camX, camY, camZ);
  setCamera(cam);
}

$(function(){
  $("#submit").click(function(){
    var file = $("#fileUpload")[0].files[0];
    console.log(file)
    var obj = {"File":file}
    $.ajax({
      type: "POST",
      url: 'upload',
      data: file,
      processData: false,
      contentType: false,
    })
  })
})

function mouseDragged(event) {
  camX -= movedX;
  camY -= movedY;
  console.log(xOff + " - " + yOff);
}

function keyPressed(event) {
  if (keyCode === 81) {
    theta -= Math.PI / 2;
  }
  if (keyCode === 69) {
    theta += Math.PI / 2;
  }
}

function mouseWheel(event) {
  camZ += event.delta * 10;
  if (camZ < 150) {
    camZ = 150;
  }
  if (camZ > 2000) {
    camZ = 2000;
  }
}
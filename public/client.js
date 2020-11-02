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
  document.addEventListener("contextmenu",
    function(event) {
      if (event.target.nodeName === "CANVAS") {
        event.preventDefault();
      }
    }
  ,false);

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

  cols = 96;
  rows = 64;
  for(var x=0;x<=rows;x++){
    terrain[x]=[];
    for(var y=0;y<cols;y++){
      terrain[x][y]=noise(x * .4, y * .4);
    }
  }
}

function draw() {
  background(24);

  fill(0, 204, 204);
  rotateZ(theta);
  translate(-cols*scl / 2, -rows*scl / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl,terrain[y][x] * 120);
      vertex(x * scl, (y + 1) * scl,terrain[y+1][x] * 120);
    }
    endShape();
  }
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, 0);
      vertex(x * scl, (y + 1) * scl, 0);
    }
    endShape();
  }

  translate(cols*scl / 2, -200);
  fill(255, 0, 0);
  sphere(50);

  translate(cols*scl / 2 + 200, rows*scl / 2 + 200);
  fill(0, 0, 255);
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
  if (event.buttons === 1) {
    camX -= movedX;
    camY -= movedY;
  }
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
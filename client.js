
var cols, rows;
var canvW, canvH;
var camX, camY, camZ, camDX, camDY;
var scl = 20;

var cam;

var terrain = [];

function setup() {

  document.addEventListener("contextmenu",
    function(event) {
      if (event.target.nodeName === "CANVAS") {
        event.preventDefault();
      }
    }
  , false);

  canvW = windowWidth * .8;
  canvH = windowHeight * .8;
  var canvas = createCanvas(canvW, canvH, WEBGL);
  canvas.parent("Canvas");

  cam = createCamera();
  camX = 0;
  camY = 0;
  camZ = 750;
  camDX = 0;
  camDY = 0;
  cam.setPosition(camX, camY, camZ);
  cam.lookAt(0, 0, 0);

  cols = 96;
  rows = 64;
  for(var x = 0; x <= rows; x++){
    terrain[x] = [];
    for(var y = 0; y < cols; y++){
      terrain[x][y] = noise(x * .4, y * .4);
    }
  }
}

function draw() {

  // SET COLOR MODE TO HSB; allows for much easier creation of a gradient
    colorMode(HSB, 360, 100,100);
    // variables associated with HSB; h - hue, s - saturation, b - brightness
    var h, s, b;
    s = 100;
  background(24);
  fill(0, 204, 204);
    // ROTATES THE IMAGE TO A SIDEWAYS ORIENTATION; PI/3 is equal to 60 degrees, so the image is 30 degrees off of the plane
      rotateX(PI/3);
    // noStroke() makes the terrain look very smooth and reduces lag
      noStroke();
  translate((-cols * scl) / 2, (-rows * scl) / 2);
  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      // fill(0, 105 + terrain[y][x] * 150, 105 + terrain[y][x] * 150);
      vertex(x * scl, y * scl,terrain[y][x] * 120);
      vertex(x * scl, (y + 1) * scl,terrain[y+1][x] * 120);
      
      

      // START OF COLOR ALGORITHM
          if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) <= -30.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100;
            fill(h, s, b);
          }
          else if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) <= -25.0 && (terrain[y+1][x]* 120) - (terrain[y][x]* 120) > -30.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100 - ( 1 * (100/28) );
            fill(h, s, b);
          }
          else if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) <= -20.0 && (terrain[y+1][x]* 120) - (terrain[y][x]* 120) > -25.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100 - ( 2 * (100/28) );
            fill(h, s, b);
          }
          else if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) <= -15.0 && (terrain[y+1][x]* 120) - (terrain[y][x]* 120) > -20.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100 - ( 3 * (100/28) );
            fill(h, s, b);
          }
          else if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) <= -10.0 && (terrain[y+1][x]* 120) - (terrain[y][x]* 120) > -15.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100 - ( 4 * (100/28) );
            fill(h, s, b);
          }
          else if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) <= -5.0 && (terrain[y+1][x]* 120) - (terrain[y][x]* 120) > -10.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100 - ( 5 * (100/28) );
            fill(h, s, b);
          }
          else if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) <= 0.0 && (terrain[y+1][x]* 120) - (terrain[y][x]* 120) > -5.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100 - ( 6 * (100/28) );
            fill(h, s, b);
          }
          else if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) <= 5.0 && (terrain[y+1][x]* 120) - (terrain[y][x]* 120) > 0.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100 - ( 7 * (100/28) );
            fill(h, s, b);
          }
          else if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) <= 10.0 && (terrain[y+1][x]* 120) - (terrain[y][x]* 120) > 5.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100 - ( 8 * (100/28) );
            fill(h, s, b);
          }
          else if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) <= 15.0 && (terrain[y+1][x]* 120) - (terrain[y][x]* 120) > 10.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100 - ( 9 * (100/28) );
            fill(h, s, b);
          }
          else if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) <= 20.0 && (terrain[y+1][x]* 120) - (terrain[y][x]* 120) > 15.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100 - ( 10 * (100/28) );
            fill(h, s, b);
          }
          else if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) <= 25.0 && (terrain[y+1][x]* 120) - (terrain[y][x]* 120) > 20.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100 - ( 11 * (100/28) );
            fill(h, s, b);
          }
          else if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) <= 30.0 && (terrain[y+1][x]* 120) - (terrain[y][x]* 120) > 25.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100 - ( 12 * (100/28) );
            fill(h, s, b);
          }
          else if ( (terrain[y+1][x]* 120) - (terrain[y][x]* 120) > 30.0) {
            h = ( ( 1 - (terrain[y][x]) ) * 360 );
            b = 100 - ( 13 * (100/28) );
            fill(h, s, b);
          }
        // END OF COLOR ALGORITHM
    }
    endShape();
  }
  rect(0, 0, cols * scl, rows * scl);

  translate((cols * scl) / 2, -200);
  fill(255, 0, 0);
  sphere(20);

  translate((cols * scl) / 2 + 200, (rows * scl) / 2 + 200);
  fill(0, 0, 255);
  sphere(20);

  camX += camDX;
  camY += camDY;

  cam.setPosition(camX, camY, camZ);

  camDX /= 4;
  camDY /= 4;

  setCamera(cam);


}

$(function() {
  $("#sendFile").click(function() {
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
    camDX -= movedX * 4;
    camDY -= movedY * 4;
  }
}

function keyPressed(event) {
  if (keyCode === 32) {
    cam.lookAt(0, 0, 0);
  }
}

function keyReleased(){
  keyCode = 3;
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
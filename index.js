const express = require("express");
const app = express();
const parser = require("body-parser");
const multer = require("multer");
const csv = require("csv-parser");
const fs = require("fs");
//setup for multer data
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });
//port to run on
const port = 8080;
//send public folder to client
app.use(express.static("public")); //sends public folder to frontend
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
//start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//post request path for uploading file to server
app.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
  
  if (!req.file) {
    res.send("please upload a file");
    return false;
  }
  const file = req.file;
  //TODO:make this in native JS(replace python)
  // var data = spawn('python',['converter.py',file.filename])
  // data.stdout.on('data',function(data){
  //   console.log('python output')
  //   console.log(data.toString())
  // })
  var x = [];
  var y = [];
  var z = [];
  var smallX = [];
  var smallY = [];
  var smallZ = [];
  var smallSlope = [];
  var slope = [];
  fs.createReadStream("uploads/" + file.originalname)
    .pipe(csv())
    .on("data", (row) => {
      length = Object.keys(row).length;
      var currentColumn = 0;
      for (i in row) {
        //console.log(row[i]);
        if (currentColumn == 0) {
          x.push(row[i]);
        } else if (currentColumn == 1) {
          y.push(row[i]);
        } else if (currentColumn == 2) {
          z.push(row[i]);
        } else if (currentColumn == 3) {
          slope.push(row[i]);
        } else {
          console.log("error in parsing file: Line Count Error");
        }
        currentColumn += 1;
      }
    })
    .on("end", () => {
      console.log("file processing completed");
      for (i in x) {
        if (i % 7200 == 0) {
          smallX.push(x[i]);
          smallY.push(y[i]);
          smallZ.push(z[i]);
          smallSlope.push(slope[i]);
        }
      }
      console.log(smallX);
      console.log(smallY);
      console.log(smallZ);
      console.log(smallSlope);S
    });

  console.log(file);
  res.redirect(".."); //redirect back to starting page (stop page rerouting)
  res.end();
});

const express = require('express')
const app = express()
const parser = require('body-parser')
const multer = require('multer')
var upload = multer({dest:'/uploads'})

const port = 8080

app.use(express.static('public')) //sends public folder to frontend
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/upload', upload.single('file'), function (req, res) {
  console.log("request recieved")
  if(req.file != undefined){
    console.log(req.file)
  }
  else{
    console.log('no file recived')
  }
  res.send('POST request to the homepage')
  res.end();
})
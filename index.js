const express = require('express')
const app = express()
const parser = require('body-parser')
const multer = require('multer')
const {spawn} = require('child_process')
//setup for multer data
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })
//port to run on
const port = 8080
//send public folder to client
app.use(express.static('public')) //sends public folder to frontend
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json())
//start server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//post request path for uploading file to server
app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  var data = spawn('python',['converter.py',file.filename])
  data.stdout.on('data',function(data){
    console.log('python output')
    console.log(data.toString())
  })
  if (!file) {
    res.send("please upload a file")
    return false;
  }
    console.log(file)
    res.redirect('..')
    res.end()
})

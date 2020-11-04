const express = require('express')
const app = express()
const parser = require('body-parser')
const multer = require('multer')
//setup for multer data
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
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
  if (!file) {
    res.send("please upload a file")
    return false;
  }
    console.log(file)
    res.redirect('..')
    res.end()
})
const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public')) //sends public folder to frontend



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.post('/upload', function (req, res) {
  console.log(req)
  res.send('POST request to the homepage')
  res.end();
})
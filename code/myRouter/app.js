const express = require('express'),
  app = express(),
  port = 3000;

app.use(express.static(`${__dirname}/public`))
  
app.get('/', (req, res, next) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(port, () => {
  console.log('listening ' + port)
})

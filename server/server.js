const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'build/index.html'));
})
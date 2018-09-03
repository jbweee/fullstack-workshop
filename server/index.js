const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./router.js');
var PORT = 3000;

var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

//between parser and static
app.use('/api', router);

app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, () => {
  console.log('App listening on PORT', PORT)
})

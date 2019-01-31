var transfer = require('transfer-rate'); // use require('transfer-rate') instead
var app = require('express')();
var finished = require('on-finished');

// customization
var rate = transfer({
  response: false
});

// routing
app.get('/', function(req, res) {

  var start = process.hrtime();

  res.send('ok');
  rate(req, res, start);

  finished(req, function(err) {

    if (!err) {
      console.log(req.transferRate); // show transferRate to console
    }
  });
}).listen(3000);
console.log('starting "hello world" on port 3000');
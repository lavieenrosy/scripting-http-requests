var https = require('https');

//append each chunk of data to a variable, then console.log the data once it's all been received.

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var chunksOfData = "";

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      chunksOfData += data + '\n';
      console.log(chunksOfData);
    });
  });

}

getAndPrintHTML();
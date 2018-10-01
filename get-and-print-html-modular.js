var https = require('https');

function getAndPrintHTML(options) {

  var chunksOfData = "";

  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      chunksOfData += data + '\n';
      console.log(chunksOfData);
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

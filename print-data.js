var https = require('https');

//console.log each chunk of data as it's received

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      console.log(data + '\n');
    });
  });

}

getAndPrintHTMLChunks();
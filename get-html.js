var https = require('https');

function getHTML(options, callback) {

  var chunksOfData = "";

  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      chunksOfData += data + '\n';
      // console.log(chunksOfData);
    });
    //invoke callback when the data is fully received
    response.on('end', function() {
      return callback(chunksOfData);
    });
  });
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getHTML(requestOptions, printHTML);
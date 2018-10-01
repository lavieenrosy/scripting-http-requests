var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printHTMLToUpperCase(html) {
  console.log(html.toUpperCase());
}

getHTML.getHTML(requestOptions, printHTMLToUpperCase);
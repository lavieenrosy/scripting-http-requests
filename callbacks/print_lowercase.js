var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printHTMLToLowerCase(html) {
  console.log(html.toLowerCase());
}

getHTML.getHTML(requestOptions, printHTMLToLowerCase);
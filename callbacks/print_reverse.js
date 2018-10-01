var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printHTMLToLowerCase(html) {
  console.log(html.split("").reverse().join(""));
}

getHTML.getHTML(requestOptions, printHTMLToLowerCase);
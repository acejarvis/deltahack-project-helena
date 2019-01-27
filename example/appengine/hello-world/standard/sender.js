var request = require('request');
var querystring = require('querystring');



var form = {
  number1: 'TD',
  number2: 'CIBC',
  number3: 'RBC',
  number4: 'CICS'
};


var formData = querystring.stringify(form);
var contentLength = formData.length;

request({
  headers: {
    'Content-Length': contentLength,
    'Content-Type': 'form-data'
  },
  uri: 'http://localhost:8081',
  body: formData,
  method: 'POST'
}, function (err, res, body) {
  console.log(res.body);
});
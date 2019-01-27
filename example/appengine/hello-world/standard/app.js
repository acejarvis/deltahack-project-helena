// /**
//  * Copyright 2017, Google, Inc.
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  *    http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  */

// 'use strict';

// // [START gae_node_request_example]
// const express = require('express');
// var bodyParser     =        require("body-parser");
// const app = express();


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post('handle',function(request,response){
// var query1=request.body.var1;
// var query2=request.body.var2;

//  response
//     .status(200)
//     .send('adsfHello, world!')
//     .end();

// });

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .send('Hello, world!')
//     .end();
// });

// // Start the server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
//   console.log('Press Ctrl+C to quit.');
// });
// // [END gae_node_request_example]

http = require('http');
fs = require('fs');



// var formData = querystring.stringify(form);
// var contentLength = formData.length;



server = http.createServer( function(req, res) {

    console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST");
        
       //responding with post reques
       
      
        var body = '';
        req.on('data', function (data) {
            body += data;
            console.log("Partial body: " + body);
        });
        req.on('end', function () {
            console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('1, RBC, 2, TD 3, CIBC 4, CICI');
    }
    else
    {
        console.log("GET");
        //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
        var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }

});

port = 8081;
host = 'localhost';
server.listen(port, host);
console.log('Listening at http://' + host + ':' + port);

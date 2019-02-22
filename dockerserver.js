/*jshint esversion: 6 */

const Express = require('express');
const BodyParser = require('body-parser');
const Http = require("http");
const HttpsClient = require("request");
const Redis = require("redis");

const _express = Express();
const _httpServer = Http.createServer(_express);

_express.use(BodyParser.json
({

    extended: true

}));

_express.use(BodyParser.urlencoded
({

    extended: true

}));

_express.get('/api', (req, res) =>
{

    var options =
    {

        "json" : true,
        "url" : "http://another-docker-workshop:7007/api",        
        "method" : "GET"

    };

    HttpsClient(options, (error, response, responseBody) =>
    {
                
        res.send('This is dockerworkhop GET\n' + responseBody);

    });
    
});

_express.post('/api/post', (req, res) =>
{
    
<<<<<<< HEAD:dockerserver.js
    res.send('This is dockerworkhop POST\n');
=======
    res.send('This is another workshop_docker POST\n');
>>>>>>> ee57a437999cf6aa4d7633a6dece80d90425b70b:anotherdockerserver.js

});

let port = process.env.PORT || 7007;
let host = "0.0.0.0";
_httpServer.listen(port, host, function ()
{

    console.log(`Another Docker container started the server on port ${_httpServer.address().port}\n`);

});

_httpServer.on("close", function ()
{

    console.log("We are Closing\n");    


});

process.on("SIGINT", function()
{
    _httpServer.close();

});

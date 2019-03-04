/*jshint esversion: 6 */

const Express = require('express');
const BodyParser = require('body-parser');
const Http = require("http");
const HttpsClient = require("request");
// const DotENV = require("dotenv");

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

// DotENV.config();

_express.get('/api', (req, res) =>
{

    var options =
    {

        "json" : true,
        "url" : "http://localhost:7007/api",
        "method" : "GET"

    };

    HttpsClient(options, (error, response, responseBody) =>
    {
                
        res.send('dockerworkhop GET --- \n' + responseBody);

    });
    
});

_express.post('/api/post', (req, res) =>
{
    
    res.send('This is dockerworkhop POST\n');

});

let port = process.env.PORT || 7005;
let host = "0.0.0.0";
_httpServer.listen(port, host, function ()
{

    console.log(`Docker container started the server on port ${_httpServer.address().port}\n`);

});

_httpServer.on("close", function ()
{

    console.log("We are Closing\n");    


});

process.on("SIGINT", function()
{
    _httpServer.close();

});

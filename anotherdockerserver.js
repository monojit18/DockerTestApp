/*jshint esversion: 6 */

const Express = require('express');
const BodyParser = require('body-parser');
const Http = require("http");
const HttpsClient = require("request");

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

_express.get('/org1', (req, res) =>
{

    var options =
    {

        "json" : true,
        "url" : "http://dockertestapp:7004/org",        
        "method" : "GET"

    };

    HttpsClient(options, (error, response, responseBody) =>
    {
                
        res.send(responseBody);

    });
    
});

_express.post('/org1/post', (req, res) =>
{
    
    res.send('This is another dockertest POST\n');

});

_express.put('/org1/put', (req, res) =>
{
    
    var bodyParameters = req.body;
    console.log(bodyParameters);
    let result = "result1:" + bodyParameters;
    res.send(result);

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

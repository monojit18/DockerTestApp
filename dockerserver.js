/*jshint esversion: 6 */

const Express = require('express');
const BodyParser = require('body-parser');
const Http = require("http");
const HttpsClient = require("request");

const _express = Express();
const _httpServer = Http.createServer(_express);
const _httpsClient = HttpsClient;

_express.use(BodyParser.json
({

    extended: true

}));

_express.use(BodyParser.urlencoded
({

    extended: true

}));

_express.get('/org', (req, res) =>
{
    res.send('This is dockertest GET\n');
});

_express.post('/org/post', (req, res) =>
{
    
    res.send('This is dockertest POST\n');

});

_express.put('/org/put', (req, res) =>
{
    
    var bodyParameters = req.body;
    console.log(bodyParameters);
    let result = "result:" + bodyParameters;
    res.send(result);

});

let port = process.env.PORT || 7003;
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

/*jshint esversion: 6 */

const Express = require('express');
const BodyParser = require('body-parser');
const Http = require("http");
// const Https = require("https");
const HttpsClient = require("request");
const DotEnv = require("dotenv");
// const Crypto = require("crypto");
// const FS = require("fs");

// var options = {
//     key: FS.readFileSync("client-key.pem"),
//     cert: FS.readFileSync("client-cert.pem")
//   };

const _express = Express();
const _httpServer = Http.createServer(_express);
// const _httpServer = Https.createServer(options, _express);

_express.use(BodyParser.json
({

    extended: true

}));

_express.use(BodyParser.urlencoded
({

    extended: true

}));

DotEnv.config();

_express.get('/api', (req, res) =>
{

    var options =
    {

        "json" : true,
        "url" : process.env.ANOTHER_API_URL,
        "method" : "GET"

    };

    HttpsClient(options, (error, response, responseBody) =>
    {
                
        res.send('dockerworkhop GET --- \n' + responseBody);

    });
    
});

_express.get('/', (req, res) =>
{
    
    res.send('This is dockerworkhop GET --- root\n');

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

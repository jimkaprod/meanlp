const express = require('express');
const router = express.Router();
var http = require('http');

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/userslp', (req, res) => {
    console.log('nonzzz')
    var options = {
      host: "api.mhourregue.lp.clients.sdv.fr",
      port: 80,
      path: '/user/find',
      method: 'GET'
    };

    http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('BODY: ' + chunk);
        });
    }).end();
});


module.exports = router;

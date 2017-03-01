var express = require('express');
var app = express();

app.get('/api/whoami', function (req, res) {
    var whoami = {};
    
    var ipaddress = req.headers["x-forwarded-for"];
    var language = req.headers["accept-language"].split(',')[0];
    var regExp = /\(([^)]+)\)/;
    var software = regExp.exec(req.headers["user-agent"])[1];
    
    whoami.ipaddress = ipaddress;
    whoami.language = language;
    whoami.software = software;
    
    res.send(whoami);
})

app.listen(8080, function () {
  console.log('request header parser server is running');
})

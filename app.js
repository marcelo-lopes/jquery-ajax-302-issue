var express = require('express');
var app = express();
var fs = require('fs');


app.get('/', function (req, res) {
    fs.readFile('index.html', function(err, data){
        if (err) throw err;
        res.format({
            html: function(){
                res.send(data);
            }
        });
    });
});

app.get('/home', function (req, res) {
    res.send("home");
});

app.get('/redirect', function (req, res) {
    res.status(302).json("/home");
});

app.listen(3002, function () {
    console.log('Example app listening on port 3002!');
});
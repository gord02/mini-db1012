var express = require("express");
var app = express();



app.post("/post", function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    
    var define = JSON.parse(req.query['data']);
    if(define['title']=='Axiom'){
        var deftext = JSON.stringify({
            'def': 'an axiom is an unprovable rule or first principle accepted as true because it is self-evident or particularly useful.',
            
        });
        res.send(deftext);
    }


}).listen(3000);

console.log("server is working");
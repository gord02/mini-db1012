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
    else if(define['title']=='Bi'){

        var deftext = JSON.stringify({
            'def': 'A biconditional statement is a combination of a conditional statement and its converse written in the  if and only if   form. ',
            
        });
        res.send(deftext);
    }
    else if(define['title']=='Compound'){

        var deftext = JSON.stringify({
            'def': 'A compound proposition is a proposition that involves the assembly of multiple statements ',
            
        });
        res.send(deftext);
    }
    else if(define['title']=='CompoundStatement'){

        var deftext = JSON.stringify({
            'def': ' A compound statement is a sentence that consists of two or more statements separated by logical connectors.',
            
        });
        res.send(deftext);
    }
    else if(define['title']=='Conjunction'){

        var deftext = JSON.stringify({
            'def': ' A conjunction is a statement formed by adding two statements with the connector AND.',
            
        });
        res.send(deftext);
    }

    

}).listen(3000);

console.log("server is working");
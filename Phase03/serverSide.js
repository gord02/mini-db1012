var express = require("express");
var app = express();

app.post("/post", function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    
    var define = JSON.parse(req.query['data']);
    if(define['title']=='axiom'){
        var deftext = JSON.stringify({
            'name': define['title'],
            "image": 'axiom.png',
            'def': 'an axiom is an unprovable rule or first principle accepted as true because it is self-evident or particularly useful.',
        });
        res.send(deftext);
    }
    else if(define['title']=='bi-conditional'){
        var deftext = JSON.stringify({
            'name': define['title'],
            "image": "bi-conditional.png",
            'def': 'A bi-conditional statement is a combination of a conditional statement and its converse written in the  if and only if   form. ',
        });
        res.send(deftext);
    }

    else if(define['title']=='compound proposition'){
        var deftext = JSON.stringify({
            'name': define['title'],
            "image": "compoundProposition.png",
            'def': 'A compound proposition is a proposition that involves the assembly of multiple statements ',
            
        });
        res.send(deftext);
    }
    else if(define['title']=='compound statement'){

        var deftext = JSON.stringify({
            'name': define['title'],
            "image": "compoundStatement.png",
            'def': ' A compound statement is a sentence that consists of two or more statements separated by logical connectors.',
            
        });
        res.send(deftext);
    }
    else if(define['title']=='conjunction'){

        var deftext = JSON.stringify({
            'name': define['title'],
            "image": "conjunction.png",
            'def': ' A conjunction is a statement formed by adding two statements with the connector AND.',
            
        });
        res.send(deftext);
    }

    

}).listen(3000);

console.log("server is working");


var url = "http://localhost:3000/post";



function axiomDef(){
   
    var toSend = {
        title: 'Axiom',
       

    }

    var jsonString = JSON.stringify(toSend);
    console.log(jsonString);
    $.post(url+'?data='+jsonString, response1);


    
}
function response1(data, status){
    var res = JSON.parse(data);
    console.log(data);
    
    document.getElementsByClassName("content").innerHTML = " ";

    document.getElementById("p1").innerHTML = res['def'];
}

function biDef(){
   
    var toSend = {
        title: 'Bi',
       

    }

    var jsonString = JSON.stringify(toSend);
    console.log(jsonString);
    $.post(url+'?data='+jsonString, response2);


    
}
function response2(data, status){
    var res = JSON.parse(data);
    console.log(data);

    document.getElementsByClassName("content").innerHTML = " ";

    document.getElementById("p2").innerHTML = res['def'];
}

function compoundDef(){
   
    var toSend = {
        title: 'Compound',
       

    }

    var jsonString = JSON.stringify(toSend);
    console.log(jsonString);
    $.post(url+'?data='+jsonString, response3);


    
}
function response3(data, status){
    var res = JSON.parse(data);
    console.log(data);

    
    document.getElementsByClassName("content").innerHTML = " ";

    document.getElementById("p3").innerHTML = res['def'];
}

function compoundStatementDef(){
   
    var toSend = {
        title: 'CompoundStatement',
       

    }

    var jsonString = JSON.stringify(toSend);
    console.log(jsonString);
    $.post(url+'?data='+jsonString, response4);


    
}
function response4(data, status){
    var res = JSON.parse(data);
    console.log(data);

    document.getElementsByClassName("content").innerHTML = " ";

    document.getElementById("p4").innerHTML = res['def'];
}
function conjunction(){
    var toSend = {
        title: 'Conjunction',
       

    }

    var jsonString = JSON.stringify(toSend);
    console.log(jsonString);
    $.post(url+'?data='+jsonString, response5);

}
function response5(data, status){
    var res = JSON.parse(data);
    console.log(data);

    

    document.getElementById("p5").innerHTML = res['def'];
}
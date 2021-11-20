

var url = "http://localhost:3000/post";

window.onload = function(){
    requestDef();
}

function requestDef(){
   
    var toSend = {
        title: 'Axiom',
       

    }

    var jsonString = JSON.stringify(toSend);
    console.log(jsonString);
    $.post(url+'?data='+jsonString, response);


    
}
function response(data, status){
    var res = JSON.parse(data);
    console.log(data);

    document.getElementById("p1").innerHTML = res['def'];
}
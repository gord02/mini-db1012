

var url = "http://localhost:3000/post";

function sendToPage() {
    var input = document.getElementById("search").value.toLowerCase();
    retrieve(input);
}

function retrieve(def) {
    var toSend = {
        title: def,
    }
    var jsonString = JSON.stringify(toSend);
    $.post(url+'?data='+jsonString, response);
}

function response(data, status){
    var res = JSON.parse(data);
    // console.log("this is res: ", res);
    // Blanks out the list of definitions on the homepage
    document.getElementById("list").innerHTML = "";

    // adds in the specific definitions data from the server
    document.getElementById("title").innerHTML = res['name'];
    document.getElementById("img").src = res['image'];
    var b1 = document.getElementById("b1");
    b1.append(img);
    document.getElementById("p").innerHTML = res['def'];
    console.log('sent to server');
}

function zoomIn() {
    document.getElementById("image").style.width="200%";
}

function zoomOut() {
    document.getElementById("image").style.width="100%";
}

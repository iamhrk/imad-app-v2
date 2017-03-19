//counter code
var button = document.gerElementById('counter');
button.onclick = function (){
    //create a request object
    
    var request = new XMLHttpRequest();
    
    //capture response and store it in a variable
    
    request.onreadystatechange = function() {
        if(request.readyState ===XMLHttpRequest.DONE){
            if (request.status===200) {
                var counter =request.responseText;
                var span =document.getElementById('count');
                span.innerHTML=counter;
            }
        }
    //no else part yet made    
    };
    
    //make request
    request.open('GET','http://iamhrk.imad.hasura-app.io/counter',true);
    request.send(null);    
};
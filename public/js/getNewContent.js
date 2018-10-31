var request = new XMLHttpRequest();

function getNew() {
    if(request){
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function(){
            if(request.readyState == 4){
                console.log(request.responseText)
            }
        }
        request.send(null);
    }else{
        console.log("no support for XML")
    }
}
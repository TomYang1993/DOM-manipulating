function showPic(link){
    // console.log(link.getAttribute('href'));
    document.getElementById('image').src = link.getAttribute('href')
    console.log(link.getAttribute('title'));
    var desp = document.getElementById('description')
    desp.firstChild.nodeValue = link.getAttribute('title')
    // console.log(desp.nodeType);
    // console.log(desp.nodeName);
}

window.onload = hello

function countBodyChildren(){
    var body = document.getElementsByTagName('body')[0];
    console.log(body.childNodes.length);
    body.childNodes.forEach(
        function(node){
            console.log(node.nodeType);
            console.log(node.nodeName);
        }
    )
}

// function hello(){
//     var para = document.createElement("p");
//     var text = document.createTextNode("Hello World");
//     var containerdiv = document.getElementById("testdiv");
//     para.appendChild(text);
//     containerdiv.appendChild(para);
// }
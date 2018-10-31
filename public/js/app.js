
console.log(typeof window.onload);

function showPic(event, link){
    event.preventDefault();
    // console.log(link.getAttribute('href'));
    document.getElementById('image').src = link.getAttribute('href')
    console.log(link.getAttribute('title'));
    // console.log(desp.nodeType);
    // console.log(desp.nodeName);
}

// window.onload = hello

// function hello(){
//     var para = document.createElement("p");
//     var text = document.createTextNode("Hello World");
//     var containerDiv = document.getElementById("testdiv");
//     para.appendChild(text);
//     containerDiv.appendChild(para);
// }

function countBodyChildren(){
    var body = document.getElementsByTagName('body')[0];
    console.log(body.childNodes.length);
    body.childNodes.forEach(
        function(node) {
            console.log(node.nodeType);
            console.log(node.nodeName);
        }
    )
}



// for adding multiple functions to the window.onload function 
function addLoadEvent(func){
 var reload = window.onload;
 if(window.onload != 'function'){
    window.onload = func;
 }else{
    window.onload = function() {
        reload();
        func();
    }
 }
};



// customized insertAfter function ( no default insertAfter only insertBefore method)
function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode
    if(parent.lastChild === targetElement){
        parent.appendChild(newElement);

    }else {
        parent.insertBefore(newElement,targetElement.nextSibling)
    }
}


function loadDescription() {
    var testDiv = document.getElementById("testdiv");
    var para = document.createElement("p");
    para.setAttribute("id", "decription");
    var text = document.createTextNode("Choose an image");
    para.appendChild(text);
    insertAfter(para, testDiv);
}

addLoadEvent(loadDescription);


// console.log(typeof window.onload);
// console.log(window);


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


// customized insertAfter function ( no default insertAfter only insertBefore method)
function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode
    if(parent.lastChild === targetElement){
        parent.appendChild(newElement);

    }else {
        parent.insertBefore(newElement,targetElement.nextSibling)
    }
}

// get next element node, skip textNodes etc
function getNextEle(node) {
    if(node.nodeType == 1){
        return node;
    }else{
        getNextEle(node.nextSibling);
    }
}

function highlightRows(){

    var rows = document.getElementsByTagName("tr");
    console.log(rows);
    for(var i =0; i < rows.length; i++){
        rows[i].onmouseover = function() {
            this.style.fontWeight = "bold";
            // remember it has to be s string
            this.style.fontSize = "20px";
        }
        rows[i].onmouseout = function() {
            this.style.fontWeight = "normal";
        }
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
addLoadEvent(highlightRows);


// addLoadEvent(getNew())
// console.log(typeof window.onload);
// console.log(window);

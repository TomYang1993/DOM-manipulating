

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
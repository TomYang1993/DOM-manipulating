function positionMessage() {
    var ele = document.getElementById("message");
    ele.style.position = "absolute";
    ele.style.left = "0px";
    ele.style.top = "400px";

    // moveMessage("message", 200, 10);
}

function moveMessage(ele_id, final_x, final_y) {

    
    var ele = document.getElementById(ele_id);

    if(ele.movement){
        clearTimeout(ele.movement);
    }
    var x = parseInt(ele.style.left);
    var y = parseInt(ele.style.top);

    if(x == final_x && y == final_y){
        return true;
    }

    if(x < final_x){
        x++;
    }else{
        x--;
    }
    if(y < final_y){
        y++;
    }else{
        y--;
    }
    ele.style.left = x + "px";
    ele.style.top = y + "px";

    ele.movement = setTimeout(moveMessage, 10, ele_id, final_x, final_y);

}

function prepareSlideShow() {
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";

    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");

    links[0].onmouseover = function(){
        moveMessage("preview", -100, 0)
    }

    links[1].onmouseover = function(){
        moveMessage("preview", -200, 0)
    }

    links[2].onmouseover = function(){
        moveMessage("preview", -300, 0)
    }


}

addLoadEvent(positionMessage);
addLoadEvent(prepareSlideShow);
var mouse_event="empty";

var last_pos_x,last_pos_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

colour="black";
width=2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width=document.getElementById("width").value;
radius=document.getElementById("radius").value;

mouse_event="mousedown";
}



canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}





canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_pos_x=e.clientX-canvas.offsetLeft;
    current_pos_y=e.clientY-canvas.offsetTop;
    


    if(mouse_event=="mousedown"){
        console.log("Current position of x and y cordinates =");
        console.log("x = "+ current_pos_x +" y = "+ current_pos_y);
    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth=width;
        ctx.arc(current_pos_x, current_pos_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
    
}

    

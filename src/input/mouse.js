var mouseX, mouseY;

let mouseIsDown = false;

function setCursorStyle(style){
    document.body.style.cursor = style;
}

function MOUSE_HANDLER_SETUP(){
    document.addEventListener('mousedown', MOUSE_HANDLER_MOUSE_DOWN);
    document.addEventListener('mouseup', MOUSE_HANDLER_MOUSE_UP);
    document.addEventListener('mousemove', MOUSE_HANDLER_MOUSE_MOVE);
}

function MOUSE_HANDLER_MOUSE_DOWN(e){
    mouseIsDown = true;

    try{
        onMouseDown();
    }catch{
        // Ignore. User may not want to use onMouseDown.
    }   
}

function MOUSE_HANDLER_MOUSE_UP(e){
    mouseIsDown = false;

    try{
        onMouseUp();
    }catch{
        // Ignore. User may not want to use onMouseUp.
    }
}

function MOUSE_HANDLER_MOUSE_MOVE(e){
    var rect = e.target.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    
    try{
        onMouseMove();
    }catch{
        // Ignore. User may not want to use onMouseMove.
    }
}
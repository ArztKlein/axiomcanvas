var mouseX, mouseY;

function MOUSE_HANDLER_SETUP(){
    document.addEventListener('mousedown', MOUSE_HANDLER_MOUSE_DOWN);
    document.addEventListener('mouseup', MOUSE_HANDLER_MOUSE_UP);
    document.addEventListener('mousemove', MOUSE_HANDLER_MOUSE_MOVE);
}

function MOUSE_HANDLER_MOUSE_DOWN(e){
    var rect = e.target.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    try{
        onMouseDown();
    }catch{
        // Ignore. User may not want to use onMouseDown.
    }   
}

function MOUSE_HANDLER_MOUSE_UP(e){
    try{
        onMouseUp();
    }catch{
        // Ignore. User may not want to use onMouseUp.
    }
}

function MOUSE_HANDLER_MOUSE_MOVE(e){
    try{
        onMouseMove();
    }catch{
        // Ignore. User may not want to use onMouseMove.
    }
}
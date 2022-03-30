export var mouseX, mouseY;
let mouseIsDown = false;

var mouseDownCallback, mouseUpCallback, mouseMoveCallback;

export function isMouseDown(){
    return mouseIsDown;
}

export function mouseSetup(mouseDownCallback_, mouseUpCallback_, mouseMoveCallback_){
    mouseDownCallback = mouseDownCallback_;
    mouseUpCallback = mouseUpCallback_;
    mouseMoveCallback = mouseMoveCallback_;

    document.addEventListener('mousedown', mouseDownHandler);
    document.addEventListener('mouseup', mouseUpHandler);
    document.addEventListener('mousemove', mouseMoveHandler);
}

export function setCursorStyle(style){
    document.body.style.cursor = style;
}

export function mouseDownHandler(){
    mouseDownCallback(mouseX, mouseY);
}

export function mouseUpHandler(){
    mouseIsDown = false;

    mouseUpCallback(mouseX, mouseY);
}

export function mouseMoveHandler(e){
    var rect = e.target.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    
    mouseMoveCallback(mouseX, mouseY);
}
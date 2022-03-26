var c, ctx;
var WIDTH, HEIGHT;
var keyboard;

function frame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    render();
    window.requestAnimationFrame(frame);
}

function onWindowResize(){
    WIDTH  = window.innerWidth;
    HEIGHT = window.innerHeight;

    ctx.canvas.width  = WIDTH;
    ctx.canvas.height = HEIGHT;
}

window.onload = function() {
    c = document.getElementById("main-canvas");
    ctx = c.getContext("2d");

    canvas = ctx.canvas

    KEYBOARD_HANDLER_SETUP();
    MOUSE_HANDLER_SETUP();

    window.onresize = onWindowResize;
    onWindowResize();
    setup();
    window.requestAnimationFrame(frame);
    
};
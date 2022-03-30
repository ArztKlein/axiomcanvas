import {keyboardSetup} from "./input/keyboard.mjs";
import {mouseSetup} from "./input/mouse.mjs";

var width;
var height;
var ctx;

export var rendererObject;

export class Renderer{
    constructor(axiomcanvas, callback, mouseDownCallback, mouseUpCallback, mouseMoveCallback, keyDownCallback){

        this.axiomcanvas = axiomcanvas;

        this.canvasElement = document.getElementById(this.axiomcanvas.id);
        this.ctx = this.canvasElement.getContext("2d");
        ctx = this.ctx;

        this.canvas = this.ctx.canvas;

        keyboardSetup(keyDownCallback);
        mouseSetup(mouseDownCallback, mouseUpCallback, mouseMoveCallback);

        window.onresize = this.onWindowResize;
        this.onWindowResize();

        rendererObject = this;
        run(callback);
    }

    onWindowResize(){
        width  = window.innerWidth;
        height = window.innerHeight;
    
        ctx.canvas.width  = width;
        ctx.canvas.height = height;
    }
}

function run(callback){
    function frame(){
        const ctx = rendererObject.ctx;
        const canvas = rendererObject.canvas;

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear buffer for next frame
        callback();
        window.requestAnimationFrame(frame);
    }
    
    window.requestAnimationFrame(frame);
}
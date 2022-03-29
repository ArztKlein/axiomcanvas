import {keyboardSetup} from "./input/keyboard.mjs";
import {mouseSetup} from "./input/mouse.mjs";

var width;
var height;
var ctx;

export class Renderer{
    constructor(axiomcanvas, mouseDownCallback, mouseUpCallback, mouseMoveCallback, keyDownCallback){

        this.axiomcanvas = axiomcanvas;

        this.canvasElement = document.getElementById(this.axiomcanvas.id);
        this.ctx = this.canvasElement.getContext("2d");
        ctx = this.ctx;

        this.canvas = this.ctx.canvas;

        keyboardSetup(keyDownCallback, keyUpCallback);
        mouseSetup(mouseDownCallback, mouseUpCallback, mouseMoveCallback);

        window.onresize = this.onWindowResize;
        this.onWindowResize();
    }

    onWindowResize(){
        width  = window.innerWidth;
        height = window.innerHeight;
    
        ctx.canvas.width  = width;
        ctx.canvas.height = height;
    }
}

export var rendererObject;

export function createRenderer(axiomcanvas, callback, mouseDownCallback, mouseUpCallback, mouseMoveCallback, keyDownCallback, keyUpCallback){
    rendererObject = new Renderer(axiomcanvas, mouseDownCallback, mouseUpCallback, mouseMoveCallback, keyDownCallback, keyUpCallback);
    run(callback, rendererObject.ctx);
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
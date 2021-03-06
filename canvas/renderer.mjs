import {keyboardSetup} from "./input/keyboard.mjs";
import {mouseSetup} from "./input/mouse.mjs";

var width;
var height;
var ctx;

export var rendererObject;

export class Renderer{
    constructor(axiomcanvas, callback, mouseDownCallback, mouseUpCallback, mouseMoveCallback, keyDownCallback, keyUpCallback){

        this.axiomcanvas = axiomcanvas;

        this.canvasElement = document.getElementById(this.axiomcanvas.id);
        this.ctx = this.canvasElement.getContext("2d");
        ctx = this.ctx;

        this.canvas = this.ctx.canvas;

        this.useFill = false;

        keyboardSetup(keyDownCallback, keyUpCallback);
        mouseSetup(mouseDownCallback, mouseUpCallback, mouseMoveCallback);

        window.onresize = this.onWindowResize;
        this.onWindowResize();

        rendererObject = this;
        run(callback);
    }

    square(x, y, w, h){
        if(this.useFill){
            this.ctx.fillRect(x, y, w, h);
        }else{
            this.ctx.beginPath();
            this.ctx.rect(x, y, w, h);
            this.ctx.stroke();

        }
    }

    disableFill(){
        this.useFill = false;
    }

    setFill(colour){
        this.ctx.fillStyle = colour;
        this.useFill = true;
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
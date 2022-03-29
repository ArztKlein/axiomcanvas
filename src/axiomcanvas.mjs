import { createRenderer, rendererObject } from "./renderer.mjs";

export class AxiomCanvas{
    constructor(id, drawFunction, mouseDownCallback, mouseUpCallback, mouseMoveCallback, keyDownCallback, keyUpCallback){
        this.id = id;

        createRenderer(this, drawFunction, mouseDownCallback, mouseUpCallback, mouseMoveCallback, keyDownCallback, keyUpCallback);
        this.renderer = rendererObject;
    }

    getWidth(){
        return this.renderer.ctx.canvas.width;
    }

    getHeight(){
        return this.renderer.ctx.canvas.height;
    }
}
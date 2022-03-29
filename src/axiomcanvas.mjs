import { Renderer, rendererObject } from "./renderer.mjs";

export class AxiomCanvas{
    constructor(id, drawFunction, mouseDownCallback, mouseUpCallback, mouseMoveCallback, keyDownCallback){
        this.id = id;

        this.renderer = new Renderer(this, drawFunction, mouseDownCallback, mouseUpCallback, mouseMoveCallback, keyDownCallback);
        this.renderer = rendererObject;
    }

    getWidth(){
        return this.renderer.ctx.canvas.width;
    }

    getHeight(){
        return this.renderer.ctx.canvas.height;
    }
}
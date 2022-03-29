# Usage

```js
import { AxiomCanvas } from "./src/canvas/axiomcanvas.mjs";

var axiomCanvas;

function setup(){
    axiomCanvas = new AxiomCanvas("main-canvas", render, onMouseDown, onMouseUp, onMouseMove, onKeyDown);
}

function render(){
    // Draw to axiomCanvas.renderer.ctx (See HTML5 Canvas documentation)
}

function onMouseUp(){
    // Insert your code
}

function onMouseDown(mouseX, mouseY){
    // Insert your code
}

function onMouseMove(mouseX, mouseY){
    // Insert your code
}

function onKeyDown(key){
    // Insert your code
}

setup();

```
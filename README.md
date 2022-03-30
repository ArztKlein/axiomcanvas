# Installation
Clone the repository `git clone https://github.com/ArztKlein/axiomcanvas.git`

Place the canvas directory into your project.

# Usage

```js
import { AxiomCanvas } from "./canvas/axiomcanvas.mjs";

var axiomCanvas;

function setup(){
    axiomCanvas = new AxiomCanvas("main-canvas", render, onMouseDown, onMouseUp, onMouseMove, onKeyDown, onKeyUp);
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

function onKeyUp(key){
    // Insert your code
}

setup();
```
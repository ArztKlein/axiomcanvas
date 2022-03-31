# Installation
Clone the repository `git clone https://github.com/ArztKlein/axiomcanvas.git`

Place the canvas directory into your project.

# Usage

When creating the AxiomCanvas, you'll need to add 5 mouse/keyboard callbacks.
These include:
- Mouse Down
- Mouse Up
- Mouse Move
- Key Down
- Key Up

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

## Test if key is held

Test to see if the shift key is held down.
```js
import { KEY_SHIFT, isKeyDown } from "./canvas/input/keyboard.mjs";

console.log(isKeyDown(KEY_SHIFT));
```

## Test if mouse is held down

```js
import { isMouseDown } from "./canvas/input/mouse.mjs";

console.log(isMouseDown());
```

## Draw square
```js
renderer.square(x, y, w, h);
```
## Disable fill
```js
renderer.disableFill(); // Don't fill when drawing shapes
```
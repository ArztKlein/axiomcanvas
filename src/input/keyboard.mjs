export const KEY_ALT = "Alt";
export const KEY_ALT_GRAPH = "AltGraph";
export const KEY_BACKSPACE = "Backspace";
export const KEY_CAPS_LOCK = "CapsLock";
export const KEY_CONTROL = "Control";
export const KEY_DELETE = "Delete";
export const KEY_ESCAPE = "Escape";
export const KEY_FN = "Fn";
export const KEY_META = "Meta";
export const KEY_NUM_LOCK = "NumLock";
export const KEY_OS = "OS";
export const KEY_SCROLL_LOCK = "ScrollLock";
export const KEY_SHIFT = "Shift";
export const KEY_SYMBOL = "Symbol";

export const KEY_ARROW_RIGHT = "ArrowRight";
export const KEY_ARROW_UP = "ArrowUp";
export const KEY_ARROW_LEFT = "ArrowLeft";
export const KEY_ARROW_DOWN = "ArrowDown";

var heldKeys = {};

heldKeys[KEY_ALT] = false;
heldKeys[KEY_ALT_GRAPH] = false;
heldKeys[KEY_BACKSPACE] = false;
heldKeys[KEY_CAPS_LOCK] = false;
heldKeys[KEY_CONTROL] = false;
heldKeys[KEY_ESCAPE] = false;
heldKeys[KEY_FN] = false;
heldKeys[KEY_META] = false;
heldKeys[KEY_NUM_LOCK] = false;
heldKeys[KEY_OS] = false;
heldKeys[KEY_SCROLL_LOCK] = false;
heldKeys[KEY_SHIFT] = false;
heldKeys[KEY_SYMBOL] = false;

export const OPERATOR_KEYS = [
    KEY_ALT, KEY_ALT_GRAPH, KEY_BACKSPACE, KEY_CAPS_LOCK, KEY_CONTROL, KEY_DELETE, KEY_ESCAPE, KEY_FN, KEY_META, KEY_NUM_LOCK, KEY_OS, KEY_SCROLL_LOCK, KEY_SHIFT, KEY_SYMBOL,
    KEY_ARROW_RIGHT, KEY_ARROW_UP, KEY_ARROW_LEFT, KEY_ARROW_DOWN
];

export const ARROW_KEYS = [KEY_ARROW_RIGHT, KEY_ARROW_UP, KEY_ARROW_LEFT, KEY_ARROW_DOWN];

var keyDownCallback;

export function keyboardSetup(keyDownCallback_){
    keyDownCallback = keyDownCallback_;
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
}

export function isKeyDown(key){
    return keyIsDown(key);
}

export function keyIsDown(key){
    return heldKeys[key];
}

function keyDownHandler(e){
    const key = e.key;

    heldKeys[key] = true;

    keyDownCallback(key);
}

function keyUpHandler(e){
    const key = e.key;

    heldKeys[e.key] = false;

    // keyUpHandler(key);
}

export function isArrowKey(key){
    return ARROW_KEYS.includes(key);
}
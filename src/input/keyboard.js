const KEY_ALT = "Alt";
const KEY_ALT_GRAPH = "AltGraph";
const KEY_BACKSPACE = "Backspace";
const KEY_CAPS_LOCK = "CapsLock";
const KEY_CONTROL = "Control";
const KEY_DELETE = "Delete";
const KEY_FN = "Fn";
const KEY_META = "Meta";
const KEY_NUM_LOCK = "NumLock";
const KEY_OS = "OS";
const KEY_SCROLL_LOCK = "ScrollLock";
const KEY_SHIFT = "Shift";
const KEY_SYMBOL = "Symbol";

const KEY_ARROW_RIGHT = "ArrowRight";
const KEY_ARROW_UP = "ArrowUp";
const KEY_ARROW_LEFT = "ArrowLeft";
const KEY_ARROW_DOWN = "ArrowDown";

heldKeys = {};

heldKeys[KEY_ALT] = false;
heldKeys[KEY_ALT_GRAPH] = false;
heldKeys[KEY_BACKSPACE] = false;
heldKeys[KEY_CAPS_LOCK] = false;
heldKeys[KEY_CONTROL] = false;
heldKeys[KEY_FN] = false;
heldKeys[KEY_META] = false;
heldKeys[KEY_NUM_LOCK] = false;
heldKeys[KEY_OS] = false;
heldKeys[KEY_SCROLL_LOCK] = false;
heldKeys[KEY_SHIFT] = false;
heldKeys[KEY_SYMBOL] = false;

const OPERATOR_KEYS = [
    KEY_ALT, KEY_ALT_GRAPH, KEY_BACKSPACE, KEY_CAPS_LOCK, KEY_CONTROL, KEY_DELETE, KEY_FN, KEY_META, KEY_NUM_LOCK, KEY_OS, KEY_SCROLL_LOCK, KEY_SHIFT, KEY_SYMBOL,
    KEY_ARROW_RIGHT, KEY_ARROW_UP, KEY_ARROW_LEFT, KEY_ARROW_DOWN
];

const ARROW_KEYS = [KEY_ARROW_RIGHT, KEY_ARROW_UP, KEY_ARROW_LEFT, KEY_ARROW_DOWN];

function KEYBOARD_HANDLER_SETUP(){
    document.addEventListener('keydown', KEYBOARD_HANDLER_KEY_DOWN);
    document.addEventListener('keyup', KEYBOARD_HANDLER_KEY_UP);
}

function isKeyDown(key){
    return keyIsDown(key);
}

function keyIsDown(key){
    return heldKeys[key];
}

function KEYBOARD_HANDLER_KEY_DOWN(e){
    const key = e.key;

    heldKeys[key] = true;

    try{
        onKeyDown(key);
    }catch{
        // Ignore. User may not want to use onKeyDown.
    }
}

function KEYBOARD_HANDLER_KEY_UP(e){
    const key = e.key;

    heldKeys[e.key] = false;

    try{
        onKeyUp(key);
    }catch{
        // Ignore. User may not want to use onKeyUp.
    }
}

function isArrowKey(key){
    return ARROW_KEYS.includes(key);
}
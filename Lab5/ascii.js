
/* global speed, iterator */

//"use strict";


"use strict";
var start1, stop1, textArea1,sizer, anim1, turbo1, timer, speed = 250;
window.onload = function () {
    
//    var start1 = document.getElementById("start");
//start1.onclick = starter;
    
    textArea1 = document.getElementById("text-area");
    anim1 = document.getElementById("animation");
    sizer = document.getElementById("fontsize");
    turbo1 = document.getElementById("turbo");

    start1= document.getElementById("start");
    stop1 = document.getElementById("stop");

    start1.onclick = start;
    stop1.onclick = stop;
    anim1.onchange = getFrames;
    sizer.onchange = setSize;
    turbo1.onchange = turbo;

};

// starting animation after a start button is clicked 
function start() {
    var frames = textArea1.value.split("=====\n");
    var i = 0, l = frames.length;
    (function iterator() {
        textArea1.value = frames[i];

        if (++i >= l) {
            i = 0;
        }
        timer = setTimeout(iterator, speed);
    })();
    stop1.disabled = false; // status change for the stop button to false/off
    start1.disabled = true; // status change for the start button to true/on
};

// stopping animation
function stop() {
    stop1.disabled = true;
    start1.disabled = false;
    clearTimeout(timer);
    getFrames();
};

// selecting of frame options 
function getFrames() {
    var dropSel = anim1.options[anim1.selectedIndex].innerHTML;
    textArea1.value = ANIMATIONS[dropSel];

};
// setting the font size of the animation
function setSize() {
    var fontsize = sizer.options[sizer.selectedIndex].value;
    textArea1.style.fontSize = fontsize;
};

// checking and unchecking the turbo speed
function turbo() {
    if (turbo1.checked) {
        speed = 50;
    }
    else {
        speed = 250;
    }
};



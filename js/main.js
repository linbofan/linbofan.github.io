/*
* INFO/CS 1300
* Fall 2016
* Linbo Fan
*
* assignment06
*
*/

/* establish global variables */
/*global window, document*/

// variables
var current_image = 1;
var photos = ["image1_small.jpg", "image3_small.jpg", "image4_small.jpg", "image5_small.jpg"];
var main_image = document.getElementById('landing_image');

// functions

function pic_next() {
    "use strict";
    if (current_image < photos.length) {
        main_image.src = 'images/' + photos[current_image];
        current_image += 1;
    } else {
        current_image = 0;
        main_image.src = 'images/' + photos[current_image];
        current_image += 1;
    }
}

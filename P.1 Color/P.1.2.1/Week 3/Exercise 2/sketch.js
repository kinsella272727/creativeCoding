'use strict';

var img;
var colors = [];

function preload(){
    img = loadImage('image/pic1.jpg');
}

function setup() {
    createCanvas(600,600);
    noCursor();
    noStroke();
    noLoop();
    
}

function draw() {
    img.loadPixels();
    colors = [];
}
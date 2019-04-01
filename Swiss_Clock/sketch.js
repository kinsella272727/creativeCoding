'use strict'

/*

  FIXED CLOCK

*/

let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

let hourStrokeLength = 30;
let hourStrokeWeight = 10;
let hourStrokeColor;
let hourStrokeCap;

let clockRadius = 200;

let hourHandsTaper = 6;
let hourHandLength = 195;
let hourHandOffset = 80;
let hourHandStartWidth = 20;
let hourRotate = 60;

let minuteHandsTaper = 6;
let minuteHandLength = 195;
let minuteHandOffset = 80;
let minuteHandStartWidth = 20;
let minuteRotate = 45;

let secondHandsTaper = 2;
let secondHandLength = 155;
let secondHandOffset = 80;
let secondHandStartWidth = 10;
let secondRotate = 25;

function setup(){
  createCanvas(500,500);
  noLoop();
  angleMode(DEGREES);

  minuteStrokeColor=color(30,30,30);
  minuteStrokeCap = SQUARE;

  hourStrokeColor = color(30,30,30);
  hourStrokeCap = SQUARE;
}

function draw(){
  for(let i = 0; i < 60; i++ ){
    push();
    translate(width/2,height/2);
    rotate(map(i,0,60,0,360));

    if(i === 0 || i%5===0) {
      strokeWeight(hourStrokeWeight);
      line(0,clockRadius+10,0,clockRadius+40);
      stroke(minuteStrokeColor);
      strokeCap(minuteStrokeCap);
    }
    else {
      strokeWeight(minuteStrokeWeight);
      line(0,clockRadius+30,0,clockRadius+40);
      stroke(hourStrokeColor);
      strokeCap(hourStrokeCap);
    }
    pop();
  }

  //hour
  push();
    translate(width/2,height/2);
    fill(hourStrokeColor);
    strokeCap(hourStrokeCap);
    rotate(-hourRotate);
    beginShape();
    vertex(-hourHandStartWidth,-hourHandStartWidth/2);
    vertex(hourHandLength,0);
    vertex(hourHandLength-hourHandOffset-hourHandStartWidth,hourHandsTaper);
    vertex(-hourHandStartWidth,hourHandStartWidth/2);
    endShape(CLOSE);
  pop();

  push();
    translate(width/2,height/2);
    fill(minuteStrokeColor);
    strokeCap(minuteStrokeColor);
    rotate(-minuteRotate);
    beginShape();
    vertex(-minuteHandStartWidth,-minuteHandStartWidth/2);
    vertex(minuteHandLength-minuteHandStartWidth,0);
    vertex(minuteHandLength-minuteHandOffset-minuteHandStartWidth,minuteHandsTaper);
    vertex(-minuteHandStartWidth,minuteHandStartWidth/2);
    endShape(CLOSE);
  pop();

  push();
    translate(width/2,height/2);
    noStroke();
    fill(255,0,0);
    rotate(-secondRotate);
    ellipse(0,0,15,15);
    ellipse(secondHandLength-secondHandStartWidth,0,20,20);
    beginShape();
    vertex(-secondHandStartWidth,-secondHandStartWidth/2);
    vertex(secondHandLength-secondHandStartWidth,0);
    vertex(secondHandLength-secondHandOffset-secondHandStartWidth,secondHandsTaper);
    vertex(-secondHandStartWidth,secondHandStartWidth/2);
    endShape(CLOSE);
    pop();
}
